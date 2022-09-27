import React from 'react';

const CartProduct = ({item:{name,picture}}) => {
   
    return (
        <div className='mb-5 ml-5'>
                <div className="card  mx-auto bg-base-100 shadow-xl">
                        <div className="card-body ">
                           <div className='flex justify-center items-center gap-2'>
                            <h2 className="card-title text-sm">{name}</h2>
                            <small>Quantity:12</small>
                            <img src={picture} alt=""  className='w-12'/>
                           </div>
                        </div>
                </div>
        </div>
    );
};

export default CartProduct;