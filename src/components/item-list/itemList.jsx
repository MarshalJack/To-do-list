import React from 'react'
import Item from '../item/item'

export default function ItemList({data, bookmark,remove,onLike}) {
    const postItem=data.map(item=>{
        return <Item key={item.id} {...item}  bookmark={()=>bookmark(item.id)} remove={()=>remove(item.id)} onLike={()=>onLike(item.id)}/>
    })
  return (
    <ul>
       {postItem}
    </ul>
  )
}
