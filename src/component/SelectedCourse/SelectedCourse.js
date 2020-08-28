import React from 'react';

const SelectedCourse = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, n) => total + n.price, 0);
    return (
        <div>

            <p>Total price: {totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default SelectedCourse;