import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
class Address{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    street: string

    @Column({ length: 8 })
    zipCode: string

    @Column({ type:'varchar', length: 6, nullable: true })
    number?: string | undefined

    @Column({ length: 20 })
    city: string

    @Column({ length: 2 })
    state: string
}

export { Address }