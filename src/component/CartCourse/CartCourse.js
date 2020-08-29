import React from 'react';

const CartCourse = (props) => {
    const { name, img, price } = props.cart;
    return (
        <div style={{ display: 'flex' }}>
            <img style={{ height: '60px', marginRight: '5px' }} src={img} alt="" />
            <div>
                <p>Course: {name}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default CartCourse;