import axios, { AxiosError, AxiosPromise, AxiosResponse} from "axios";
import { useQuery } from "@tanstack/react-query";
import { EmpresaData } from "../datas/Empresa";

const API_URL = 'http://localhost:8080'

export const postEmpresaData = async (data: EmpresaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/company/cadastrar', data)
    return response;
}

const fetchData = async(): AxiosPromise<EmpresaData[]> => {
    const response = axios.get(API_URL + '/company/listar')
    return response;
}

export function getEmpresaData() {
    const query = useQuery({queryFn: fetchData,
        queryKey: ['empresa-data'],retry: 2})

    return {...query,
    data: query.data?.data
    }
}

const fetchEmpresa = async(cnpj: String): AxiosPromise<EmpresaData> => {
    const response = axios.get(API_URL + '/company/buscar?cnpj=' +cnpj+ '')

    return response;
}

export function getEmpresa(cnpj: string) {
    const query = useQuery<AxiosResponse<EmpresaData>, AxiosError, EmpresaData>(
      ['company-data', cnpj],
      () => fetchEmpresa(cnpj),
      { retry: 2 }
    );        
    return { ...query}.data;
}

export const postAtualizarEmpresaData = async (data: EmpresaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/company/update', data)
    return response;
}

export const postExcluirEmpresa = async (data: EmpresaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/company/delete', data)
    return response;
}