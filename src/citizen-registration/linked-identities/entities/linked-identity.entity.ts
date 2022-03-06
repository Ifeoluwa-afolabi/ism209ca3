import { CitizensBiodatum } from "src/citizen-registration/citizens-biodata/entities/citizens-biodatum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    NIN: number;

    @Column({nullable: true})
    BVN: number;

    @Column({nullable: true})
    MobileNumber: number;
    
    @JoinColumn()
    @OneToOne(type=> CitizensBiodatum, citizensbiodata => citizensbiodata.linkedidentity, {cascade:  true})
    citizensbiodata: CitizensBiodatum;
}