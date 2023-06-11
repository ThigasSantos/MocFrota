import { AddressData } from "./Adress";

export interface EmpresaData {
    cnpj: string;
    name: string;
    telefone: string;
    email: string;
    address: AddressData;
    status: string;
}