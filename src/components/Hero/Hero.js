import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Hero = ({handleAddToCart,hero,hero:{name,picture,price,superPower}}) => {
    return (
        <div>
          <div className="card w-100 h-full bg-base-100 shadow-2xl rounded-lg">
            <figure><img src={picture} className="rounded-lg w-9/12 h-3/4" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">${price}</div> 
                        <div className="badge badge-outline">${superPower}</div>
                        <button onClick={()=> handleAddToCart(hero)} className="btn btn-wide">
                            Add To Cart
                            <span className='ml-2'><FontAwesomeIcon icon={faShoppingCart} /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;<h1>Hero</h1>