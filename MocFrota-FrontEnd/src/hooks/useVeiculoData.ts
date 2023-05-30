import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { VeiculoData } from "../datas/VeiculoData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

export const postVeiculoData = async (data: VeiculoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculo/cadastrar', data)
    return response;
}

export const postAtualizarVeiculoData = async (data: VeiculoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculo/update', data)
    return response;
}

export const postExcluirVeiculo = async (data: VeiculoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculo/delete', data)
    return response;
}

const fetchData = async(): AxiosPromise<VeiculoData[]> => {
    const response = axios.get(API_URL + '/veiculo/listar')
    return response;
}

export function getVeiculoData() {
    const query = useQuery({queryFn: fetchData,
        queryKey: ['veiculos-data'],retry: 2})

    return {...query,
    data: query.data?.data
    }
}

const fetchVeiculo = async(placa: String): AxiosPromise<VeiculoData> => {
    const response = axios.get(API_URL + '/veiculo/buscar?placa=' + placa + '')
    
    return response;
}

export function getVeiculo(placa: string) {
    const query = useQuery<AxiosResponse<VeiculoData>, AxiosError, VeiculoData>(
      ['veiculo-data', placa],
      () => fetchVeiculo(placa),
      { retry: 2 }
    );
        
    return { ...query}.data;
  }