import React from 'react'
import './item.css'

export default function Item({label,bookmark,remove,onLike, id,bookmarked, liked}) {
  let classHolder='d-flex justify-content-between item';
  if(bookmarked){
          classHolder+=' bookmark'
  }
   if(liked){
    classHolder+=' like'
   }

  return (
   <li className={classHolder}>
    <span className='text'>{label}</span>
    <div >
        <button className='btn star btn-sm star' onClick={()=>bookmark(id)}><i className='fa fa-star'></i>
</button>
        <button className='btn-trash btn-sm trash' onClick={()=>remove(id)}> <i className="fa fa-trash-o"></i></button>
        <button className='btn-trash btn-sm' onClick={()=>onLike(id)}><i className='fa fa-heart heart'  ></i></button>
    </div>
   </li>
  )
}
