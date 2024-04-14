import {axiosInstance} from "./base.api";

const endpoint = 'character';

export const characters = {
   getAll: function ({ page = 1 }:{page?:number}){
       return axiosInstance.get(endpoint, {params:{
             page
           }
       });
   },
    getById: function ({ id }:{id:number}){
        return axiosInstance.get(`${endpoint}/${id}` );
    }
}
