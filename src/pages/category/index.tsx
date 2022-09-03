import classnames from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageInfoType } from '../../types'

import classes from './styles.module.scss'
import { RootStateType } from '../../redux/store'
import { IchartItem } from '../../redux/cart/types'
import { setGridItems } from '../../redux/categories/actions/category'
import Movies from '../../components/grid'


interface CategoryMovieType {
  pageInfo: PageInfoType
  setDetails: (details: IchartItem)=>void
}
const Category: React.FC<CategoryMovieType> = ({ pageInfo, setDetails }) => {
  const { url, title } = pageInfo
  const movieList = useSelector<RootStateType, Array<IchartItem>>((state) => state.category.category)

  //this is a dummy data just for example and for testing
  const fantastic = [
    { id: "1", price: 12, title: "Space Suit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/YLmstMgR/a.jpg" },
    { id: "2", price: 11, title: "Alien", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/mhcqYNq9/b.jpg" }
  ]

  const comedy = [
    { id: "3", price: 7, title: "Police Academy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/mcsNWcHr/academy.jpg" },

    { id: "4", price: 14, title: "The Mask", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/ph0Djq19/mask.jpg" },

    { id: "5", price: 9, title: "Home Alone", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/dZLGjrz5/homealone.jpg" },

    { id: "6", price: 13, title: "Mister Bean", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/cg1R6VTy/bean.webp" },
    { id: "3", price: 7, title: "Police Academy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/mcsNWcHr/academy.jpg" },

    { id: "4", price: 14, title: "The Mask", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/ph0Djq19/mask.jpg" },

    { id: "5", price: 9, title: "Home Alone", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/dZLGjrz5/homealone.jpg" },

    { id: "6", price: 13, title: "Mister Bean", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/cg1R6VTy/bean.webp" },
    { id: "3", price: 7, title: "Police Academy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/mcsNWcHr/academy.jpg" },

    { id: "4", price: 14, title: "The Mask", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/ph0Djq19/mask.jpg" },

    { id: "5", price: 9, title: "Home Alone", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/dZLGjrz5/homealone.jpg" },

    { id: "6", price: 13, title: "Mister Bean", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/cg1R6VTy/bean.webp" },
  ]

  const horrors = [
    { id: "7", price: 14, title: "The Think", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/f3fvD11X/think.webp" },

    { id: "8", price: 12, title: "Friday 13", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/R6CLFXzY/Jason.jpg" },

    { id: "9", price: 16, title: "Nightmore on Elm Street", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", pictureUrl: "https://i.postimg.cc/PLj4GdVT/freddy.jpg" },

  ]
  const dispatch = useDispatch()
  

  useEffect(() => {
    url === "horror" && dispatch(setGridItems(horrors))
    url === "comedy" && dispatch(setGridItems(comedy))
    url === "fantastic" && dispatch(setGridItems(fantastic))
  }, [url])
  

  return (
    <div
      className={classnames(classes.category, {
        [classes.horror]: pageInfo.url === 'horror',
        [classes.comedy]: pageInfo.url === 'comedy',
        [classes.fantastic]: pageInfo.url === 'fantastic'
      })}
    >
      <div className={classnames(classes.cover)}>
        <h3 className={classnames(classes.title)}>{title}</h3>
        <Movies items={movieList} setDetails={setDetails} />
      </div>
    </div>
  )
}

export default Category