import { AdressData } from "./Adress";

export interface UserData{
    nome: string;
    email: string;
    senha: string;
    role: string;
}

export interface UserDataGerente{
    cpf: string;
    telefone: string;
    adress: AdressData;
}


export interface UserDataCondutor{
    cnh: string;
    cpf: string;
    telefone: string;
    adress: AdressData;
}
