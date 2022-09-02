import classnames from 'classnames'
import React from 'react'
import { ListGroup, ListGroupItem, Badge, Button } from 'reactstrap'
import classes from './styles.module.scss'
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg";
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { IchartItem } from '../../redux/cart/types';
import { useNavigate } from 'react-router-dom'
import { clearChart, deleteItem } from '../../redux/cart/actions/chart';

const Cart = () => {
  const cartList = useSelector<RootStateType, Array<IchartItem>>((state) => state.chart.chart)
  const prices: Array<number> = []
  const navigate  = useNavigate()

  const dispatch = useDispatch()
  const onCartClear = () => {
    dispatch(clearChart())
  }

  const onItemDelete = (id:string) => {
    dispatch(deleteItem(id))
  }

  const onPayment = () => {
    navigate('/payment')
  }
  
  return (
    <div className={classnames(classes.cart)}>
      <h3 className={classnames(classes.title)}>Cart</h3>
      {cartList.length ? <ListGroup className={classnames(classes.list)}>
        {cartList && cartList.map((el, i) => {
          prices.push(el.price)
          return (
            <ListGroupItem
              key = {i}
              className="d-flex justify-content-between"
            >{el.title}<span>Price: {el.price}$</span>
              <DeleteIcon
                onClick={()=>onItemDelete(el.id)}
                className={classnames(classes.icon)} /></ListGroupItem>
          )
        })}

        <ListGroupItem className="d-flex justify-content-between">Total Amount: <span>{prices.reduce((a, b) => a + b)}$</span><span></span></ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between"><Button
          onClick={onPayment}>Purchase</Button>
          <Button onClick={onCartClear}>Clear Cart</Button></ListGroupItem>
      </ListGroup> : <span>The Cart is Empty</span>}
    </div>
  )
}

export default Cart