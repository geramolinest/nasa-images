import axios from 'axios';
import { BASE_URL } from '../../../api.json';

export const nasaService = ( search ) =>{
    try{
        const url = BASE_URL + `${search}`
        return axios.get(url);
    }catch(e){
        console.error('Error trying to get data from nasa service ', e);
    }
}