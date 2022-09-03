import { addItem, clearChart, deleteItem } from '../redux/cart/actions/chart';
import { chartReducer } from '../redux/cart/reducers/chart';
import { InitStateType } from './../redux/cart/types';


let startState: InitStateType;
beforeEach(() => {
  startState = {
    isLoading: false,
    message: {status: 0 , text: ""},
   chart: [
    { description: 'all', title: 'test', id: 'ssssss', price: 12, pictureUrl: "url" },
    { description: 'all', title: 'test2', id: 'qqqqq', price: 12, pictureUrl: "url" },
    { description: 'all', title: 'test3', id: 'wwww', price: 12, pictureUrl: "url" },
  ]};
});

test("correct item must be removed", () => {

 const action = deleteItem("ssssss");
const endState = chartReducer(startState, action);
  expect(endState.chart.length).toBe(2);
  expect(endState.chart.every((t) => t.id !== "ssssss")).toBeTruthy();;
});

test("cart must me empty", () => {

 const action = clearChart();
const endState = chartReducer(startState, action);
  expect(endState.chart.length).toBe(0);
});

test("movie must be added", () => {

 const action = addItem(    { description: 'all', title: 'test3', id: '1234', price: 12, pictureUrl: "url" },);
const endState = chartReducer(startState, action);
  expect(endState.chart.length).toBe(4);
  expect(endState.chart.some((t) => t.id !== "1234")).toBeTruthy();
});