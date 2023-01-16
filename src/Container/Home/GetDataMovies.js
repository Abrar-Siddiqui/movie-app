import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovies from '../../Components/CardMovie'

const GetDataMovies = () => {
    const [content,setContent] = useState([])
    const [pageno,setPageno] = useState(1)
    const [pagination, setPagination]  = useState(0)

    const API_KEY = "39e0443823fa1fd595f6cd460c4ec2e0"
    const getMoviesData = async () =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        setContent(data.results)
        setPagination(data.total_pages)
    }
    useEffect(()=>{
        getMoviesData()
    },[])
  return (
    <div>
    <div className='bg-dark text-white'>
        <h1 className='text-center pt-5'>Top Trending Movies</h1>
        <h6 className='text-center  pb-5'>Tv and Movies For You</h6>
    </div>
        {
            content && content.length > 0 ? content.map((items,i)=>{
                return(
                            <CardMovies key={i} data={items} mediaType="tv" />                       
                )
            }) : <h1>Lodding Content..</h1>
        }
    </div>
  )
}

export default GetDataMovies