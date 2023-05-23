import axios, { AxiosPromise } from "axios"
import { FunctionsData } from "../inteface/FunctionsData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<FunctionsData[]> => {
    const response = axios.get(API_URL + '/Frota')
    return response;
}

export function useFunctionsData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['functions-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}