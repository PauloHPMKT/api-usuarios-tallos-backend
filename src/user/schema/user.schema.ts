/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  cod_user: { type: Number, uniqu: true },
  name: String,
  email: String,
  contact: String,
  cpf: String,
  description: String,
  password: String,
  location: {
    address: {
      street: String,
      complement: String,
      zipcode: String,
      neighborhood: String,
      city: String,
      state: String,
      country: String,
    }
  },
  roles: String,
  dept: String,
  corporative_email: String,
  atuation_area: String,
  createdAt: { type: Date, default: Date.now() },
});
