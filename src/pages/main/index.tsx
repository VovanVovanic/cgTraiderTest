import classnames from 'classnames'
import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import './styles.scss'

const Main = () => {
  return (
    <div className={classnames('main')}>
      <div className={classnames('cover')}>
        <h3 className={classnames('title')}>Main Page</h3>
      </div>
    </div>
  )
}

export default Main