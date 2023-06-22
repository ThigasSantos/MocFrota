import axios, { AxiosError, AxiosPromise, AxiosResponse} from "axios";
import { useQuery } from "@tanstack/react-query";
import { StatusData } from "../datas/Status";

const API_URL = 'http://localhost:8080'

export const postStatusData = async (data: StatusData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculo/checklist', data)
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
