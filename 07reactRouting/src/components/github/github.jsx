
import React ,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
            
    // },[])

    return (
        <div className='bg-gray-600 text-white text-3xl p-4 text-center'>
            <h1 className='text-2xl font-bold mb-4'>Github</h1>
            Github followers: {data.followers}
            <img className=''src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Mohilrahangdale')
    const data = await response.json()
    return data
}
