import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';

const Superheros = () => {

    const [heros,setHeros] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{

        // ** data load 

        const dataLoader = async ()=>{
            try {
                const response = await fetch(`superheros.json`);
                response.ok ? console.log('Ok') : console.log('failed');
                const data = await response.json();
                setHeros(data);
            } catch (error) {
                console.log(error)
            }
        };

        dataLoader()

    },[]);



    // ** Handle add to cart

    const handleAddToCart = (selectedProduct)=>{

        const {name,picture,price,superPower,_id,quantity} = selectedProduct;
        
        const info = {
            _id,
            name,
            superPower,
            price,
            picture,
            quantity
        };

        let newArray = [];

        const existed = cart.find(item => item._id === selectedProduct._id);

        if (!existed) {
            newArray = [...cart,info];
            setCart(newArray);
            localStorage.setItem('cart',JSON.stringify([...cart,info]));
        } else{
            const rest = cart.filter(item=> item._id !== _id);
            existed.quantity = existed.quantity + 1;
            newArray = [...rest,existed];
            localStorage.setItem('cart',JSON.stringify([...rest,existed]))
        }

    }


    return (
        <div className='grid lg:grid-cols-12 container mx-auto'>
            <div className='col-span-10'>
              <div className='grid grid-cols-3 gap-x-5 gap-y-5 mt-10'>
                {
                    heros?.map(hero => <Hero handleAddToCart={handleAddToCart} key={hero._id} hero={hero} />)
                }
              </div>
            </div>
            <div className='col-span-2'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Superheros;