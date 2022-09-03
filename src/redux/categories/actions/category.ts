import { Dispatch } from "redux";
import { setLoading, setMessage } from "../../cart/actions/chart";
import { IchartItem, Statuses } from "../../cart/types";
import { getCategory } from "../../services/api";
import { GET_MOVIES } from "../types";


export const setGridItems = (items: Array<IchartItem>) => ({ type: GET_MOVIES, payload: items } as const)


export const fetchGetCategory = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await getCategory()
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