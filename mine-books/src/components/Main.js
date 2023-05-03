import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const[search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA9Ff-Xt_tjKi_J1NcN9jOsNR3ZBGi-TMc')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Hi, i'm Faith..<br/>You are at the right place to read <br/>Educating yet Edifying Books</h1>
                    </div>
                    <div className="row2">
                        <h2>Find a book today!</h2>
                        <div className="search">
                            <input type="search" placeholder="Enter Book Name"
                            value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                            <button>Go</button>
                        </div>
                        <img src="./images/bbb.jpeg" alt=""/>
                    </div>
                </div>
                <div className="container">
                    {
                      <Card book={bookData}/>  
                    }
                    
                </div>
        </>
    )
}
export default Main;
