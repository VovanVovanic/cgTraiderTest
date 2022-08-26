import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import React from 'react'
import './styles.scss'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { PageInfoType } from '../../types'


interface NavType {
  setPageInfo: (info: PageInfoType) => void
}
const Navigation: React.FC<NavType> = ({setPageInfo}) => {
  const links = [
    { to: "/", label: "Main" },
    { to: "/category", label: "Comedy", title: "Comedy", url: "comedy" },
    { to: "/category", label: "Fantastic", title: "Fantastic", url: "fantastic" },
    { to: "/category", label: "Horror", title: "Horror", url: "horror" }
  ]
  return (
    <nav className={classnames('navigation')}>
      <div className={classnames('wrapper')}>
        <div className={classnames('nav')}>
          {links.map((el) => {
            return (
              <NavLink to={el.to}>
                <Button size="lg" color="info"
                  className={classnames('btn')}
                  onClick={() => el.title && setPageInfo({ title: el.title, url: el.url })}
                >
                  {el.label}
                </Button ></NavLink>
            )
          })}
        </div>
        <div className={classnames('chart')}>
          <NavLink to={'cart'}>
            <Button size="lg" color="info" className={classnames('btn')}>
              Cart
            </Button ></NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navigation