import { ADD_ITEM, DELETE_ITEM, CLEAR_CHART, IMessage, SET_MESSAGE, SET_LOADING, Statuses } from '../types';

import { Dispatch } from 'redux';
import { addItemToChart, clearAllData, deleteItemFromChart, getItems } from '../../services/api';
import { IchartItem, GET_CHART } from '../types';

///actions
export const getChartItems = (items: Array<IchartItem>) => ({ type: GET_CHART, payload: items } as const)
export const setMessage = (message: IMessage) => ({ type: SET_MESSAGE, payload: message } as const)
export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading } as const)

//that actions below must be removed when real server is connected That operations must be done on backend end then returned to front
export const addItem = (item: IchartItem) => ({ type: ADD_ITEM, payload: item } as const)
export const deleteItem = (id: string) => ({ type: DELETE_ITEM, payload: id } as const)
export const clearChart = () => ({ type: CLEAR_CHART } as const)


///thunks only as an example as I dont have backend here in this task. 
export const fetchGetItems = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await getItems()
    let arr = [] as Array<IchartItem>
    if (res) {
      arr = Object.entries(res).map(([id, values]) => {
        return {...values, id:id}
      })
    }
  }
  catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchAddItem = (item: IchartItem) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))

  try {
    const res = await addItemToChart(item)
    if (res) {
      dispatch(setMessage({status: Statuses.message, text: res}))
    }
  }
    catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchDeleteItem = (id: string) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))

  try {
    const res = await deleteItemFromChart(id)
    if (res) {
      dispatch(setMessage({status: Statuses.message, text: res}))
    }
  }
catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}

export const fetchClearAll= () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))

  try {
    const res = await clearAllData()
    if (res) {
      dispatch(setMessage({status: Statuses.message, text: res}))
    }
  }
catch (e:any) {
    dispatch(setMessage({status: Statuses.error, text: e}))
  }
  dispatch(setLoading(false))
}