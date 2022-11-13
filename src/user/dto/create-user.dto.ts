export class CreateUserDto {
  _id?: string;
  cod_user: number;
  name: string;
  email: string;
  contact: string;
  cpf: string;
  description: string;
  password: string;
  location: {
    address: {
      street: string;
      complement: string;
      zipcode: string;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
    };
  };
  roles: string;
  dept: string;
  corporative_email: string;
  atuation_area: string;
  private _doc: any;
}
