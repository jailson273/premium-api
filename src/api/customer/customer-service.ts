import { Address } from "@api/address/address-entity";
import { AddressReferenceEnum } from "@api/address/enum/address-reference-enum";
import { AddressRepositoryInterface } from "@api/address/interface/address-repository-interface";
import { PhoneReferenceEnum } from "@api/phone/enum/phone-reference-enum";
import { PhoneRepositoryInterface } from "@api/phone/interface/phone-repository-interface";
import { Phone } from "@api/phone/phone-entity";
import { ServiceBase } from "@api/base/service-base";
import { Customer } from "./customer-entity";
import { CustomerServiceInterface } from "./interface/customer-service-interface";

export class CustomerService extends ServiceBase<Customer> implements CustomerServiceInterface {
    private addressRepository: AddressRepositoryInterface;
    private phoneRepository: PhoneRepositoryInterface;

    constructor({ customerRepository, addressRepository, phoneRepository }) {
        super(customerRepository);
        this.addressRepository = addressRepository;
        this.phoneRepository = phoneRepository;
    }

    async create(customer: Customer): Promise<Customer> {
        const { addresses, phones, ...dataCustomer } = customer;
        const customerCreated = await this.repository.create(dataCustomer);

        const addressesCreated: Address[] = [];
        if (addresses && addresses.length > 0) {
            for (const addr of addresses) {
                try {
                    const addrCreated = await this.addressRepository.create({
                        ...addr,
                        customerId: customerCreated.id,
                        billing: addr.billing ?? false,
                        shipping: addr.shipping ?? false,
                    });
                    addressesCreated.push(addrCreated);
                } catch {}
            }
        }

        const phonesCreated: Phone[] = [];
        if (phones && phones.length > 0) {
            for (const phone of phones) {
                try {
                    const phoneCreated = await this.phoneRepository.create({
                        ...phone,
                        default: phone.default ?? false,
                        customerId: customerCreated.id,
                    });
                    phonesCreated.push(phoneCreated);
                } catch {}
            }
        }
        customerCreated.addresses = addressesCreated;
        customerCreated.phones = phonesCreated;
        return customerCreated;
    }
    async getById(id: number): Promise<Customer> {
        const query: any[] = [
            this.repository.getById(id),
            this.phoneRepository.getByReferenceId(PhoneReferenceEnum.Customer, id),
            this.addressRepository.getByReferenceId(AddressReferenceEnum.Customer, id),
        ];
        const [customerResult, phonesResult, addressesResult] = await Promise.all(query);
        const customer: Customer = customerResult;
        customer.addresses = <Address[]>addressesResult;
        customer.phones = <Phone[]>phonesResult;

        return customer;
    }
}
