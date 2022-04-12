import React from 'react';

const Card = ({ hotel,handleAddToCart }) => {
    const {  name, img, price, rate } = hotel;

    return (
        <div className='md:flex shadow-lg bg-white rounded-lg'>
            <div className=' p-5'>
                <img className=' w-fit' src={img} alt="" />
            </div>
            <div className='p-2 w-11/12 mx-auto'>
                <div className='flex justify-between font-semibold'>
                    <h1 className='text-xl text-indigo-600'>{name}</h1>
                    <h2 className='text-2xl'>${price}</h2>
                </div>
                <div className='flex justify-between mt-10 mb-5'>
                    <p>Rating: {rate}</p>
                    <button 
                    onClick={()=> handleAddToCart(hotel)}
                    className=' bg-indigo-600 hover:bg-orange-400 text-white p-2 rounded'
                    >Check out</button>
                </div>
            </div>


        </div>
    );
};

export default Card;