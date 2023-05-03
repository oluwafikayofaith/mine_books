import React from "react";
const Modal=({show,item,onClose})=>{
    if(!show){
        return null;
    }
    let thumb= item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return(
            <>
            <div className="layer">
               <div className="innerlayer">
                <button className="close" onClick={onClose}>close</button>
                <div className="box">
                    <img src={thumb} alt=''/>
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}</h4>
                        <a href={item.volumeInfo.previewLink}><button>View More..</button></a>
                    </div>
                </div>
                <h4 className="description">{item.volumeInfo.description}</h4>
                </div> 
                </div>
            </>
        )
}
export default Modal;