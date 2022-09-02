
import classnames from 'classnames'
import React from 'react'
import './styles.scss'
import { Badge, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { PageInfoType } from '../../types'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../redux/store'
import { IchartItem } from '../../redux/cart/types'


interface NavType {
  setPageInfo: (info: PageInfoType) => void
}
const Navigation: React.FC<NavType> = ({ setPageInfo }) => {
  const movieList = useSelector<RootStateType, Array<IchartItem>>((state) => state.chart.chart)

  const links = [
    { to: "/", label: "Main" },
    { to: "/category", label: "Comedy", title: "Comedy", url: "comedy" },
    { to: "/category", label: "Fantastic", title: "Fantastic", url: "fantastic" },
    { to: "/category", label: "Horror", title: "Horror", url: "horror" }
  ]


  const onLinkClickHandler = (el:any) => {
    el.title && setPageInfo({ title: el.title, url: el.url })
  }

  return (
    <nav className={classnames('navigation')}>
      <div className={classnames('wrapper')}>
        <div className={classnames('nav')}>
          {links.map((el) => {
            return (
              <NavLink to={el.to} key={el.label}>
                <Button size="sm" color="primary"
                  className={classnames('btn')}
                  onClick={() => onLinkClickHandler(el)}
                >
                  {el.label}
                </Button ></NavLink>
            )
          })}
        </div>
        <div className={classnames('chart')}>
          <NavLink to={'cart'} className={classnames('chartLink')}>
            <Button size="sm" color="primary" className={classnames('btn')}>
              Cart 
            </Button >
            {movieList.length ? <Badge color="secondary" className={classnames('cartBadge')}>{movieList.length}</Badge> : ""}
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navigation