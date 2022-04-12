import React from 'react';
import Card from '../Card/Card';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, } from '../../utilities/fakedb';


const Home = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products)

    const handleAddToCart = (selectHotel) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectHotel.id);
        if (!exists) {
            selectHotel.quantity = 1;
            newCart = [...cart, selectHotel];
        }
        else {
            const rest = cart.filter(product => product.id !== selectHotel.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectHotel.id);
    }

    return (
        <div>
            <h1 className='text-center text-xl md:text-4xl my-10 font-semibold'>Welcome to <span className='text-indigo-600 '>Las Vegas Hotel</span> booking</h1>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                products.map(hotel => <Card
                key={hotel.id}
                hotel={hotel}
                handleAddToCart={handleAddToCart}
                />)
            }
        </div>
        </div>
    );
};

export default Home;