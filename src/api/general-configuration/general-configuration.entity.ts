import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class GeneralConfiguration extends EntityBase {
    //Cliente padrão para Pedido de Vendas

    //Fornecedor padrão para Pedido de Compra

    //Cliente Padrão para Ordem de Serviço

    //Centro de Custo padrão para Pedido de Venda

    //Centro de Custo padrão para Ordem de Serviço

    //Centro de Custo padrão para Pedido de Compra

    //Limite de Desconto Vendas
    @Column({ type: "float", nullable: true, default: null })
    salesOrderDiscountLimit?: number;
}
