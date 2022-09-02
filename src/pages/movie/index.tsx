import classnames from 'classnames'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { addItem } from '../../redux/cart/actions/chart'
import { IchartItem } from '../../redux/cart/types'
import { RootStateType } from '../../redux/store'
import classes from './styles.module.scss'

interface MovieType {
details: IchartItem | null
}
const Movie: React.FC<MovieType> = ({ details }) => {

  const dispatch = useDispatch()
  const cartList = useSelector<RootStateType, Array<IchartItem>>((state) => state.chart.chart)
  const [modal, setToggleModal] = useState<any>(false)
  const isMovieinCart = cartList.length && cartList.some((el) => el.id === details?.id)
  const navigate = useNavigate()

  ///Should be used in useEffect hook in case of real back end
  const onCartAdd = () => {
    ///dont use this, use appropriate thunk instaed in cease of real data from backend
    
    if (isMovieinCart) {
      setToggleModal(true)
      return
    }
    dispatch(addItem(details as IchartItem)) 
    navigate('/category')
  }

  return (
    <div className={classnames(classes.movie)}>
      <div className={classnames(classes.cover)}>
        <h4 className={classnames(classes.title)}>Details: {details?.title}</h4>
        <div className={classnames(classes.wrapper)}>

          <Card className={classnames(classes.content)}>
            <div className={classnames(classes.imgCover)}>
              <img alt="Sample" src={details?.pictureUrl} className={classnames(classes.img)} />
            </div>
            <CardBody>
              <CardTitle tag="h4">
                {details?.title}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h5"
              >
                Price: {details?.price}$
              </CardSubtitle>
              <CardText style={{ fontSize: "14px" }}>
                {details?.description}
              </CardText>
              <div className={classnames(classes.btn)}>
                  <Button
                  size="sm"
                  color="primary" outline
                  onClick={onCartAdd}
                  >
                    Add to Chart
                  </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Modal isOpen={modal} toggle={setToggleModal}>
        <ModalBody>
          This movie already in your cart
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setToggleModal(false)}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Movie