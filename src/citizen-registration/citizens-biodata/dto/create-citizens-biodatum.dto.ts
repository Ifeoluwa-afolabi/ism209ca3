export class CreateCitizensBiodatumDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfbirth: Date;
    readonly Nationality: string;
    readonly countryOfbirth: string;
    readonly stateOfbirth: string;
    readonly townOfbirth: string;
    readonly ResidenceAddress: string;
    readonly Profession: string;

}