import axios, { AxiosError, AxiosPromise, AxiosResponse} from "axios";
import { useQuery } from "@tanstack/react-query";
import { StatusData, StatusDataAll } from "../datas/Status";

const API_URL = 'http://localhost:8080'

export const postStatusData = async (data: StatusData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculo/checklist', data)
    return response;
}

export const postUpdateStatusData = async (data: StatusDataAll): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/status/update', data)
    return response;
}

const fetchStatus = async(placa: String): AxiosPromise<StatusData> => {
    const response = axios.get(API_URL + '/veiculo/buscar?placa=' +placa+ '')
    return response;
}

export function getStatus(placa: string) {
    const query = useQuery<AxiosResponse<StatusData>, AxiosError, StatusData>(
      ['status-data', placa],
      () => fetchStatus(placa),
      { retry: 2 }
    );        
    return { ...query}.data;
}

const fetchData = async(): AxiosPromise<StatusDataAll[]> => {
    const response = axios.get(API_URL + '/status/listar')
    return response;
}

export function getStatusData() {
    const query = useQuery({queryFn: fetchData,
        queryKey: ['status-data'],retry: 2})

    return {...query,
    data: query.data?.data
    }
}

const fetchStatusAlter = async(id: number): AxiosPromise<StatusData> => {
    const response = axios.get(API_URL + '/status/buscar?id=' +id+ '')
    return response;
}

export function getStatusAlter(id: number) {
    const query = useQuery<AxiosResponse<StatusData>, AxiosError, StatusData>(
      ['status-data', id],
      () => fetchStatusAlter(id),
      { retry: 2 }
    );        
    return { ...query}.data;
}