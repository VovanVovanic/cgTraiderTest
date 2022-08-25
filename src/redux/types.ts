import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { addItem, clearChart, deleteItem, getChartItems, setLoading, setMessage } from "./actions/chart";
import { initState } from "./reducers/chart";
import { RootStateType } from "./store";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const CLEAR_CHART = "CLEAR_CHART";
export const GET_CHART = "GET_CHART"
export const SET_LOADING = "SET_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"

export type InitStateType  = typeof initState

export interface IchartItem {
  id: string,
  price: number
  description: string
  pictureUrl: string
}

export interface IMessage {
  status: number
  text: string
}

export enum Statuses {
  default = 0,
  message = 1,
  error = 3
}
 
type GetChartType = ReturnType<typeof getChartItems>
type SetMessageType = ReturnType<typeof setMessage>
type SetLoadingType = ReturnType<typeof setLoading>

//Temporary type. Must be removed if having real server
type SetAddType = ReturnType<typeof addItem>
type SetDeleteType = ReturnType<typeof deleteItem>
type SetClearType = ReturnType<typeof clearChart>
///
export  type ActionsType = GetChartType | SetMessageType | SetLoadingType | SetAddType | SetDeleteType | SetClearType 


//this one just in case if one thunk will use actions belongs to another thunk or reducer
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>
export type ThunkType = BaseThunkType<ActionsType >