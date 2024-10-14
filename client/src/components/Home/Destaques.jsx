import React from 'react'
import ProductCard from '../ProductCard'

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://picsum.photos/200/300',
    description: 'This is a product',
    price: 99.000,
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://picsum.photos/200/301',
    description: 'This is another product',
    price: 1.000,
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://picsum.photos/200/302',
    description: 'This is a third product',
    price: 1.099,
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://picsum.photos/200/303',
    description: 'This is a fourth product',
    price: 11.99,
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://picsum.photos/200/304',
    description: 'This is a fifth product',
    price: 1.99,
  },
  {
    id: 6,
    name: 'Product 6',
    imageUrl: 'https://picsum.photos/200/305',
    description: 'This is a sixth product',
    price: 7.99,
  },
  {
    id: 7,
    name: 'Product 7',
    imageUrl: 'https://picsum.photos/200/306',
    description: 'This is a seventh product',
    price: 6.99,
  },
  {
    id: 8,
    name: 'Product 8',
    imageUrl: 'https://picsum.photos/200/307',
    description: 'This is an eighth product',
    price: 5.99,
  },
  {
    id: 9,
    name: 'Product 9',
    imageUrl: 'https://picsum.photos/200/308',
    description: 'This is a ninth product',
    price: 4.99,
  },
]
const Destaques = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-4xl font-bold pt-8 text-center pb-4'>
            Destaques
        </h1>

        <div className=' self-center  place-items-center  w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   2xl:grid-cols-5  gap-4'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        
    </div>
  )
}

export default Destaques