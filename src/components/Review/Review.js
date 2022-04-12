import React from 'react';

const Review = ({ item ,deleteReviewItem}) => {
    const { id, name, img, price, } = item
    return (
        <div className=''>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className=''>
                <h3>{name.length < 20 ? name : name.slice(0,20)+'...'}</h3>
                <h5>Price: {price}</h5>
            </div>
            <div>
                <button className=' bg-red-500 text-white p-2 rounded' onClick={()=>deleteReviewItem(id)}>X
                </button>
            </div>
        </div>
    );
};

export default Review;