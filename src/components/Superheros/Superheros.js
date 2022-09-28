import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import { getLsData } from '../utilities/manageDb';

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
        
        const {_id,quantity} = selectedProduct;

        const info = {
            _id,
            quantity
        }
      
        // ** get cart value from ls

        const storedCart = JSON.parse(localStorage.getItem('cart'));

       
       
        
       
        if (storedCart) {
            const isExistedinLs = storedCart.find(item => item._id === _id);
            if (isExistedinLs) {
                isExistedinLs.quantity = isExistedinLs.quantity + 1;
                localStorage.setItem('cart', JSON.stringify(storedCart));
                
            }else{
                localStorage.setItem('cart', JSON.stringify([...storedCart,info]));
                
            };
            
                
        } else{
            // ** set the ls
            localStorage.setItem('cart', JSON.stringify([info]));
            console.log("first bk added")
        };

        

    };

    // ** localStorage theke data ene ui te dekhabo

    useEffect(()=>{
        // ** get the storedData
        const storedData = getLsData();

        const displayFromLsArray = [];
        
        for (const key in storedData) {
            
            const findProduct = heros.find(item => item._id === key);

            if (findProduct) {
                findProduct.quantity = storedData[key];
                displayFromLsArray.push(findProduct);
            }

        };

        setCart(displayFromLsArray);

    },[heros]);






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
                <Cart  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Superheros;