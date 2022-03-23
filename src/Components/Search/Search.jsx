import React from 'react'
import './Search.css'
import { useState } from 'react/cjs/react.development'

export const Search = () => {

    const fetchApi = () => {
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=DJ8CDMzIaEM5jVPey2xPE3QYUZDG44pz&q=${search}&limit=${limit}&offset=0&rating=g&lang=en`
        fetch(URL)
            .then(response => response.json())
            .then(result => {
                console.log(result.data)
                setGiphyData(result.data)
            })
    }

    let [search, setSearch] = useState("")
    let [ limit , setLimit ] = useState(16)
    let [giphyData, setGiphyData] = useState([]);

    const setValue = (e) => {
        setSearch(e.target.value)
    }

    const setLimitGif = (e) =>{
        setLimit(e.target.value)
    }

    return (
        <div className="search-box">
            <h1 className='author-title'>GIF SEARCH BY SEBAS RUIZ</h1>
            <div className="form-required">
                <input type="text" placeholder='searh GIF....' onChange={setValue}></input>
                <input className='limiter' type="number" placeholder='GIF limit...' onChange={setLimitGif}></input>
                <button onClick={fetchApi}>search</button>
            </div>  
            <div className="cards">
            {
                    giphyData.map(element => {
                        
                        console.log(element.images.fixed_height.webp)
                        return(
                            
                            <img src={element.images.fixed_height.webp} alt="" />
                        )     
                    })
                }
            </div>
        </div>
    )
}
