import React from 'react'
import { useState } from 'react'

export default function AddPost({addPost}) {
  const [postText, setText]=useState('')
  const onChangeText=(e)=>{
    setText(e.target.value)
  }
  return (
    <div className='d-flex footer'> <input className='form-control' type="text" placeholder='What are you thinking about now?' value={postText} onChange={onChangeText}/> <button onClick={()=>{addPost(postText);setText('') }} className='btn btn-outline-primary'>Add</button></div>
  )
}
