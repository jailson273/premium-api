import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class EntityBase {
    @PrimaryGeneratedColumn("increment")
    @Column({ primary: true, type: "integer" })
    id?: number;

    @Column({ default: true })
    active?: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
