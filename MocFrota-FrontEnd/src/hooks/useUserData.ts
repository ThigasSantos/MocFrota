import axios, { AxiosError, AxiosPromise, AxiosResponse} from "axios";
import { UserData, UserDataAll, UserDataCondutor, UserDataGerente, UserDataPessoa } from "../datas/UserData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

export const postUserLoginData = async (data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/user/cadastrar', data)
    return response;
}

export const postCondutorData = async (data: UserDataCondutor): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/user/cadastrar/condutor', data)
    return response;
}

export const postGerenteData = async (data: UserDataGerente): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/user/cadastrar/gerente', data)
    return response;
}

const fetchData = async(): AxiosPromise<UserDataAll[]> => {
    const response = axios.get(API_URL + '/user/listar')
    return response;
}

export function getUsersData() {
    const query = useQuery({queryFn: fetchData,
        queryKey: ['users-data'],retry: 2})

    return {...query,
    data: query.data?.data
    }
}

const fetchPessoa = async(cpf: String): AxiosPromise<UserDataPessoa> => {
    const response = axios.get(API_URL + '/user/buscar?cpf=' +cpf+ '')

    return response;
}

export function getPessoa(cpf: string) {
    const query = useQuery<AxiosResponse<UserDataPessoa>, AxiosError, UserDataPessoa>(
      ['pessoa-data', cpf],
      () => fetchPessoa(cpf),
      { retry: 2 }
    );
        
    return { ...query}.data;
}
