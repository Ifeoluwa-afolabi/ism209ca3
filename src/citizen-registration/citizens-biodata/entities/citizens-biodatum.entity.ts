import { LinkedIdentity } from "src/citizen-registration/linked-identities/entities/linked-identity.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToOne, JoinColumn } from "typeorm";

@Entity()


export class CitizensBiodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true} )
    firstName: string;

    @Column({nullable:true} )
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column({nullable:true} )
    Nationality: string;

    @Column( {nullable:true} )
    countryOfbirth: string;

    @Column({nullable:true} )
    townOfbirth: string;

    @Column({nullable:true} )
    stateOfbirth: string;

    @Column({nullable:true} )
    ResidenceAddress: string;

    @Column({nullable:true} )
    Profession: string;


    @JoinColumn()
    @OneToOne(type => LinkedIdentity, linkedidentity => linkedidentity.citizensbiodata)
    linkedidentity:LinkedIdentity;
}