import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cart}) => {

    const totalQuantity = cart.reduce((previousValue,currentValue) => previousValue + currentValue.quantity ,0);
    const totalPrice = cart.reduce((previousValue,currentValue) => previousValue + (currentValue.price * currentValue.quantity) ,0);
    const tax = +((totalPrice * 0.1).toFixed(2));
    const grandTotal = +((totalPrice + tax).toFixed(2))

   
    return (
        <div style={{position:"sticky",top:"5"}} className="my-5 ">
             {
                cart?.map(item => <CartProduct  key={item._id} item={item}/>)
             }
          <div className='my-5'>
            {/* ** Calculation */}
            <div  className="mockup-code ml-2 mr-2 mt-10 bg-slate-200">
                    <h1 className='text-gray-600 text-center font-extrabold text-xl'>Cart Calculation</h1>
                    {/* **Selected items will be update from the ls */}
                    <pre><code className='text-gray-700'>Selected Items:{totalQuantity} </code></pre> 
                    <pre  className="text-warning"><code>Price:{totalPrice} </code></pre> 
                    <pre  className="text-success"><code>Tax:{tax} </code></pre>
                    <pre  className="text-success"><code>Grand Total:{grandTotal} </code></pre>
            </div>
          </div>
        </div>
    );
};

export default Cart;