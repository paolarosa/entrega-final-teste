import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules.entity";

@Entity('real_estate')
class Estate{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: false, nullable: true})
    sold?: boolean | undefined

    @Column('decimal', { precision: 12, scale: 2 })
    value: number

    @Column({type:"integer"})
    size: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(()=> Categories,(categories) => categories.estate)
    category: Categories

    @OneToMany(()=> Schedules,(schedules) => schedules.realEstate)
    schedules: Schedules

}

export { Estate }