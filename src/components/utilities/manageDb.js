// ** get the ls data

const getLsData = ()=>{
    const storedData = JSON.parse(localStorage.getItem('cart'));

    let cart = [];

    storedData && (cart = storedData);

    return cart;
};


const setDataToLs = ()=>{
    const storedData = getLsData();

    if (storedData.length === 0) {
        
        localStorage.setItem('cart',JSON.stringify(info))
    }
   
};


export {
    setDataToLs,
    getLsData
};
