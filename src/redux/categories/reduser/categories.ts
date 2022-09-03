import { IchartItem, IMessage } from "../../cart/types";
import { ActionsType, GET_MOVIES, InitStateType, SET_LOADING, SET_MESSAGE } from "../types";



export const initState = {
  isLoading: false,
  message: {status: 0 , text: ""} as IMessage,
  category: [] as Array<IchartItem >,
}

export const categoryReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, category: action.payload }
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_MESSAGE:
      return { ...state, message: action.payload}
    default:
      return state
  }
}

