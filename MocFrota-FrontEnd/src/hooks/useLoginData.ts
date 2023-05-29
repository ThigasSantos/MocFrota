import axios, { AxiosPromise } from "axios"
import { LoginData } from "../datas/LoginData";

const API_URL = 'http://localhost:8080'

export const postData = async (data: LoginData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/usuario', data)
    return response;
}

