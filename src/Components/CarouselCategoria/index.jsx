import React from 'react'
import Slider from 'react-slick'
import BookItem from '../BookItem'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const generateSettings = (max) => ({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: max,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

const Index = ({ text, query }) => {
  // get books
  let books = []
  for (let index = 0; index < 10; index++)
    books.push({
      img: '/static/livro.jpg',
      title: 'A mão esquerda de Deus',
      author: 'Deus',
      id: index
  })

  const onFavoriteHandler = (e, data) => console.log(data)
  const onCartHandler = (e, data) => console.log(data)

  const settings = generateSettings(books.length)

  return (
    <div className="container mt-4" id="carousel">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>{text}</h2>
        </div>
        <br />
        <br />
      </div>
      <Slider {...settings}>
        {books.map(({ img, title, author, id }) => (
          <BookItem
            key={id}
            id={id}
            img={img}
            title={title}
            author={author}
            onFavoriteHandler={onFavoriteHandler}
            onCartHandler={onCartHandler}
          />
        ))}
      </Slider>
    </div>
  )
}

export default Index
