import React from 'react'
import CarouselItem from '../components/Home/CarouselItem'
import Carousel from '../components/Home/Carousel'
import Destaques from '../components/Home/Destaques'

const items = [
  {
      imageUrl: 'pngwing.com.png',
      title: '70% OFF on all the products of dg fsf fsf fsf',
      description: 'Slide 1 description fhafh fjlkafj flafja jflkaf fjaklfj fakfja fjalkfjaf fjakjflkaj afjlkajfkj fklafjlka falfjlkaj lfoajfa lfjalkfjakf flafjaf fjalkflkajflkjaflkjlk falfjafja.',
  },
  {
      imageUrl: 'pngwing.com.png',
      title: 'Slide 2',
      description: 'This is the second slide description.',
  },
  {
      imageUrl: 'pngwing.com.png',
      title: 'Slide 3',
      description: 'This is the third slide description.',
  },
];
const HomePage = () => {
  return (
    <div>
      <Carousel items={items}/>
      <Destaques/>
    </div>
  )
}

export default  HomePage