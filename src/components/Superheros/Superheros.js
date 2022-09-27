import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import { getLsData, setDataToLs } from '../utilities/manageDb';

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

        //** */ {cart:{id:quantity,id:quantity}}

       let newCart = [];

       const existedProduct = cart.find(item => item._id === selectedProduct._id);

       if (!existedProduct) {

            newCart = [...cart,selectedProduct];
            setCart(newCart);
            // ** set to ls
            setDataToLs(selectedProduct._id);
       } else{
            const rest = cart.filter(item => item._id !== existedProduct._id);
            existedProduct["quantity"] = existedProduct["quantity"] + 1;
            newCart = [...rest,existedProduct];
            setCart(newCart);
            setDataToLs(existedProduct._id);
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