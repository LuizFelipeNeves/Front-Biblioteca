import React from 'react'
import Categoria from '../CarouselCategoria'

const Index = () => {
  return (
    <div>
     <Categoria text={'Mais Populares'} query={{ category: 'eae' }} />
      <Categoria
        text={'Universitários e Profissionais'}
        query={{ category: 'eae' }}
      />
      <Categoria
        text={'Novidades que chegaram pra você'}
        query={{ category: 'eae' }}
      />
    </div>
  )
}

export default Index
