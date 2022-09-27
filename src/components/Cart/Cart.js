import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div style={{position:"sticky",top:"5"}} className="my-5 ">
             {
                cart?.map(item => <CartProduct  key={item._id} item={item}/>)
             }
          <div className='my-5'>
            {/* ** Calculation */}
            <div  className="mockup-code ml-2 mr-2 mt-10 bg-slate-200">
                    <h1 className='text-gray-600 text-center font-extrabold text-xl'>Cart Calculation</h1>
                    <pre><code className='text-gray-700'>Selected Items: {cart.length}</code></pre> 
                    <pre  className="text-warning"><code>installing...</code></pre> 
                    <pre  className="text-success"><code>Done!</code></pre>
            </div>
          </div>
        </div>
    );
};

export default Cart;