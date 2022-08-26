import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import React from 'react'
import './styles.scss'
import { Button } from 'reactstrap'

const Navigation = () => {
  return (
    <nav className={classnames('navigation')}>
      <Button size="lg" color="info" style={{ border: "none", padding: "10px", }}>
        <FontAwesomeIcon icon={faHouse} className="fa-2xl" style={{ color: "rgba(0,0,255, 0.3)"}} />
      </Button >
      <Button size="lg" color="info" style={{ border: "none", padding: "10px" }}>
        <FontAwesomeIcon icon={faShoppingCart} className="fa-2xl" style={{ color: "rgba(0,0,255, 0.3)"}} />
      </Button>
    </nav>
  )
}

export default Navigation