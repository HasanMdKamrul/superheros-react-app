import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';

const Superheros = () => {

    const [heros,setHeros] = useState([]);

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

    },[])


    return (
        <div className='grid lg:grid-cols-12 container mx-auto'>
            <div className='col-span-10'>
              <div className='grid grid-cols-3 gap-x-5 gap-y-5 mt-10'>
                {
                    heros?.map(hero => <Hero key={hero._id} hero={hero} />)
                }
              </div>
            </div>
            <div className='col-span-2'>
                <h1>Cart content</h1>
            </div>
        </div>
    );
};

export default Superheros;