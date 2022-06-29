import { nasaModel } from "../models/nasa.model";
import { nasaService } from "../services/nasa.service";

export const nasaAdapter = async (search) =>{
    try{

        const imagesResponse = await nasaService(search);
        const imagesResult = imagesResponse.data.collection.items.map( o => nasaModel(o));
    
        return imagesResult;
    }catch(e){
        console.error('Error trying to get data from nasa adapter ', e);
    }
}