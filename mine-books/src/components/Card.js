import React, { useState } from "react";
import Modal from "./Modal";
const Card=({book})=>{
    //console.log(book)
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return(
        <>
        {
            book.map((item) =>{
                let thumb= item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amt= item.saleInfo.listPrice && item.saleInfo.listPrice.amt;
                //if(thumb!= undefined && amt!= undefined)
                //{
                    return(
                        <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                            <img src={thumb} alt=""/>
                             <div className="but">
                            <h3 className="title">{item.volumeInfo.title}</h3>
                             <p className="amount">&#8377;{amt}</p>
                            </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                        </>
                        )
              //  }
               
            })
        }
        
        </>
    )
}
export default Card;