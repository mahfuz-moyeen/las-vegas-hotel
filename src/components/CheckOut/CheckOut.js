import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Review from '../Review/Review';

const CheckOut = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)

    const deleteReviewItem = (id) => {
        const rest = cart.filter(product => product.id !== id)
        setCart(rest)
        removeFromDb(id)
    }
    return (
        <div>
            <h1 className='order-title'>Orders</h1>
            <h3 className='order-total'>order items: {cart.length}</h3>
                <div className="review-container">
                    {
                        cart.map(item => <Review
                            key={item.id}
                            item={item}
                            deleteReviewItem={deleteReviewItem}
                        />)
                    }
                </div>
                
            </div>
    );
};

export default CheckOut;