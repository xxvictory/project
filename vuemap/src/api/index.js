import axios from 'axios';
import qs from 'querystring';
import {baseUrl,ncov,ncovcity,ncovabroad,key} from './base'

// 抗击疫情接口
export function getncov(){
    return axios.get(baseUrl+ncov+'?key='+key.key)
}

// 省市疫情接口
export function getncovcity(){
    return axios.get(baseUrl+ncovcity,{
        params:key
    })
}

// 海外疫情接口
export function postncovabroad(){
    return axios.post(baseUrl+ncovabroad,qs.stringify(key))
}