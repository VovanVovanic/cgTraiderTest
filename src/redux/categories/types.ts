import { setLoading, setMessage } from "../cart/actions/chart"
import { setGridItems } from "./actions/category"
import { initState } from "./reduser/categories"

export const GET_MOVIES = "GET_MOVIES"
export const SET_LOADING = "SET_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"

export type InitStateType = typeof initState

type GetGridType = ReturnType<typeof setGridItems>
type SetMessageType = ReturnType<typeof setMessage>
type SetLoadingType = ReturnType<typeof setLoading>

export  type ActionsType = GetGridType | SetMessageType | SetLoadingType 