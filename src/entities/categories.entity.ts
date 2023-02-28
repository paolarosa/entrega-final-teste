import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estate } from "./realEstate.entity";

@Entity('categories')
class Categories{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45, unique: true })
    name: string

    @OneToMany(()=> Estate,(estate) => estate.category)
    estate: Estate
}

export { Categories }