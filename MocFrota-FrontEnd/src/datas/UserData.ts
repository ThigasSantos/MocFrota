import { AddressData } from "./Adress";

export interface UserData{
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface UserDataGerente{
    name: string;
    cpf: string;
    role: string;
    telefone: string;
    address: AddressData;
    id: number;
}


export interface UserDataCondutor{
    name: string;
    cnh: string;
    cpf: string;
    role: string;
    telefone: string;
    address: AddressData;
    id: number;
}

export interface UserDataAll{
    name: string;
    cpf: string;
    role: string;
}

export interface UserDataPessoa{
    name: string;
    cpf: string;
    role: string;
    telefone: string;
    address: AddressData;
    user: UserData;
}

