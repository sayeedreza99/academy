import React from 'react';
import CartCourse from '../CartCourse/CartCourse';

const SelectedCourse = (props) => {
    const cart = props.cart;

    const totalPrice = props.cart.reduce((total, n) => total + n.price, 0);
    return (
        <div>
            {
                cart.map(n => <CartCourse cart={n}></CartCourse>)
            }

            <hr />
            <h3>Total selected course: {cart.length}</h3>
            <h2>Total price: ${totalPrice.toFixed(2)}</h2>
        </div>
    );
};

export default SelectedCourse;