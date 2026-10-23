import {useState, useEffect} from 'react'

//+++++Custom hooks design+++++//
//eise use laga dete hai function  ke naam ke aage
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    console.log(data);

    return data
}

export default useCurrencyInfo;