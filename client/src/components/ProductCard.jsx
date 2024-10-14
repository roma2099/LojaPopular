import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="w-52 sm:w-64 md:w-56 lg:w-56 xl:w-64 rounded-xl md:w-overflow-hidden shadow-xl  dark:shadow-bg dark:bg-primary/20 border border-text/20 ">                
            <img className="w-full h-48 object-cover rounded-t-xl" src={product.imageUrl} alt={product.name} />
                <div className="px-2 py-2">
                    <div className="font-bold text-xl mb-2 text-primary">{product.name}</div>
                    <p className="text-text/70 text-sm">{product.description}</p>
                </div>
                <div className="px-2 pt-1 pb-2 flex items-center justify-between">
                    <span className="text-xl font-bold text-text">{product.price.toFixed(3)}$</span>
                    <button className="bg-primary hover:bg-secondary text-background font-bold py-2 px-2 rounded-full text-xs inline-flex items-center">

                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard