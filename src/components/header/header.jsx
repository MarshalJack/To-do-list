import React from 'react'
import { useState } from 'react'

export default function Header({data}) {
  const [user,setUser]=useState('User Name')
  let mode=0
  const liked= data.filter(item=>item.liked===true).length
  const changeName=()=>{
    if(mode===0){
      mode=1
      const h3=document.getElementById('userName')
      h3.innerHTML=''
      const textarea=document.createElement('textarea')
      textarea.setAttribute('rows',1)
      const btn=document.createElement('button')
      textarea.innerHTML=user
      textarea.className="textEditor"
      btn.innerHTML='✔'
      btn.className='btn btn-success'
      h3.append(textarea)
      h3.append(btn)
      btn.addEventListener('click',()=>{
        setUser(textarea.value)
        mode=0
        h3.innerHTML=user
      })
    }
  }
  return (
    <div id='header' className='d-flex justify-content-between'> <div onClick={changeName}><h3 id='userName'>{user}</h3></div> <div> {data.length} notes ,{liked} liked</div></div>
  )
}
