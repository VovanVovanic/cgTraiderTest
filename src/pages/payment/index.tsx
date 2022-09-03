import classnames from 'classnames'
import React from 'react'
import classes from './styles.module.scss'


const Main = () => {
  return (
    <div className={classnames(classes.payment)}>
      
        <h3 className={classnames(classes.title)}>Payment</h3>
      
    </div>
  )
}

export default Main