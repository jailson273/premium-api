import { Address } from "@api/address/address-entity";
import { AddressReferenceEnum } from "@api/address/enum/address-reference-enum";
import { AddressRepositoryInterface } from "@api/address/interface/address-repository-interface";
import { ServiceBase } from "@api/base/service-base";
import { PhoneReferenceEnum } from "@api/phone/enum/phone-reference-enum";
import { PhoneRepositoryInterface } from "@api/phone/interface/phone-repository-interface";
import { Phone } from "@api/phone/phone-entity";
import { Company } from "./company-entity";
import { CompanyServiceInterface } from "./interface/company-service-interface";

export class CompanyService extends ServiceBase<Company> implements CompanyServiceInterface {
    private addressRepository: AddressRepositoryInterface;
    private phoneRepository: PhoneRepositoryInterface;

    constructor({ companyRepository, addressRepository, phoneRepository }) {
        super(companyRepository);
        this.addressRepository = addressRepository;
        this.phoneRepository = phoneRepository;
    }

    async create(company: Company): Promise<Company> {
        const { addresses, phones, ...dataCompany } = company;
        const companyCreated = await this.repository.create(dataCompany);

        const addressesCreated: Address[] = [];
        if (addresses && addresses.length > 0) {
            for (const addr of addresses) {
                try {
                    const addrCreated = await this.addressRepository.create({
                        ...addr,
                        companyId: companyCreated.id,
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
                        companyId: companyCreated.id,
                    });
                    phonesCreated.push(phoneCreated);
                } catch {}
            }
        }

        companyCreated.addresses = addressesCreated;
        companyCreated.phones = phonesCreated;

        return companyCreated;
    }

    async getById(id: number): Promise<Company> {
        const query: any[] = [
            this.repository.getById(id),
            this.phoneRepository.getByReferenceId(PhoneReferenceEnum.Company, id),
            this.addressRepository.getByReferenceId(AddressReferenceEnum.Company, id),
        ];

        const [companyResult, phonesResult, addressesResult] = await Promise.all(query);
        const campany: Company = companyResult;
        campany.addresses = <Address[]>addressesResult;
        campany.phones = <Phone[]>phonesResult;

        return campany;
    }
}
