///this all are fake data but it can be rework in accordance with server and back end settings

import axios from "axios"
import { IchartItem } from "../cart/types"

const instance = axios.create({
    baseURL: 'https://fake_cdtraider_store'
})

export const getItems = () => {
  return instance.get<Array<IchartItem>>(`/chart.json`)
    .then((response) => {
      return response.data
    })
}

//in that endpoints message should came from back end and report about action status
export const addItemToChart = (payload:IchartItem) => {
  return instance.post(`/chart.json`, payload)
    .then((response) => {
      return response.data
    })
}

export const deleteItemFromChart = (id:string) => {
  return instance.delete(`/chart/${id}.json`)
    .then((response) => {
      return response.data
    })
}

export const clearAllData= () => {
  return instance.delete(`/chart/clear`)
    .then((response) => {
      return response.data
    })
}

export const getCategory = () => {
  return instance.get<Array<IchartItem>>(`/category.json`)
    .then((response) => {
      return response.data
    })
}