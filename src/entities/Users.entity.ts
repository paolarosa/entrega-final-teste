import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";
import { Schedules } from "./schedules.entity";

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column()
    admin: boolean

    @Column({ length: 120 })
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToMany(()=> Schedules,(schedules) => schedules.user)
    schedules: Schedules
}

export { User }