import React, { useState,useEffect } from 'react';
import Album from './cards';
import './index.css'

const Cards=()=>
{

const [post,setPost]=useState(   [])
const[query,setQuery]=useState('chicken')
const[callApi,setCallApi]=useState('')

useEffect(
    ()=>{
        getData()
    },[callApi]
)

const getData=async()=>
{
const APP_ID='3d54f08c';
const APP_KEY='26abad2c177151ac2b992da473d20c78';
const URL=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
const responce=await fetch(URL)
const data=await responce.json()
console.log(data.hits);
setPost(data.hits)
console.log(post)
}

const takeQuery=(e)=>
{
    setQuery(e.target.value);
}

const searchQuery=()=>
{
    setCallApi(query);
    
}

return ( 
<div >
    <form>
    <input type='text' onChange={takeQuery} className="bar" ></input>
    
    <button onClick={searchQuery} className='btn'>Submit</button>
    </form>
   { post.map(i=><Album
        key={i.recipe.label+i.recipe.totalTime+i.recipe.calories}
        googleId={i.recipe.totalTime}
        Title={i.recipe.label}
        Subheader={i.Subheader}
        Description={'calories'+i.recipe.calories}
        link={i.recipe.image}
        
        />)
        }
        </div>
        );

    
}
export default Cards;