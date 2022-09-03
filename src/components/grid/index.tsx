import classnames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import { IchartItem } from '../../redux/cart/types'
import './styles.scss'

interface GridType {
  items: Array<IchartItem>
  setDetails: (details: IchartItem) => void
}


const Movies: React.FC<GridType> = ({ items, setDetails }) => {
 
  const onClickHandler = (item: IchartItem) => {
    setDetails(item)
}
  return (
    <div className={classnames('movies')}>
      {
        items.map((el, i) => {
          return (
            <Card key={i}>
              <div className={classnames('imgCover')}>
                <img alt="Sample" src={el.pictureUrl} className={ classnames('img')} />
              </div>
                
              <CardBody>
                <CardTitle tag="h5">
                  {el.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"
                >
                  Price: {el.price}$
                </CardSubtitle>

                <div className={classnames('btn')}>
                  <NavLink to="/movie">
                    <Button
                      size="sm"
                      color="primary" outline
                      onClick={() => onClickHandler(el)}
                    >
                      More
                    </Button>
                  </NavLink>


                </div>

              </CardBody>
            </Card>
          )
        })
      }

    </div>
  )
}

export default Movies