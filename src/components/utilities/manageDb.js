// ** get data from ls

const getLsData = ()=>{
    const storedData = JSON.parse(localStorage.getItem('cart'));

    let cart = {};

    storedData && (cart = storedData);

    return cart; // ** {};
};

// ** setData to ls

const setDataToLs = (id)=>{
    const storedData = getLsData(); // * {};

    if (id in storedData) {
        storedData[id] = storedData[id] + 1;
        localStorage.setItem('cart',JSON.stringify(storedData));
    } else{
        storedData[id] = 1;
        localStorage.setItem('cart', JSON.stringify(storedData))
    }
};


export {
    setDataToLs,
    getLsData
};
