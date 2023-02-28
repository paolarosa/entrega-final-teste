import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Estate } from "./realEstate.entity";
import { User } from "./Users.entity";

@Entity('schedules_users_properties')
class Schedules{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date' })
    date: string | Date

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(()=> User,(user) => user.schedules)
    user: User

    @ManyToOne(()=> Estate,(estate) => estate.schedules)
    realEstate: Estate
}

export { Schedules }