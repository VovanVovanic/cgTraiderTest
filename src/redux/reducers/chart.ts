import { ActionsType, ADD_ITEM, CLEAR_CHART, DELETE_ITEM, IMessage } from './../types';
import { IchartItem, InitStateType, GET_CHART, SET_LOADING, SET_MESSAGE } from '../types'

export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  chart: [] as Array<IchartItem >,
}


export const chartReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case GET_CHART:
      return { ...state, chart: action.payload }
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload}
    //that code below must be removed when real server is connected That operations must be done on backend end then returned to front
    case ADD_ITEM:
      return { ...state, chart: [...state.chart, action.payload] }
    case CLEAR_CHART:
      return { ...state, chart: [] }
    case DELETE_ITEM:
      return {...state, chart: state.chart.filter((el)=>el.id !== action.payload)}
    default:
      return state
  }
}