import axios, { AxiosPromise} from "axios";
import { UserData, UserDataCondutor, UserDataGerente } from "../datas/UserData";

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
