import React from 'react'
import { useState } from 'react'

export default function Search({searchText, setSearchText, onSearch}) {
  
  const changeSearchText=(e)=>{
    setSearchText(e.target.value);
  }
  return (
    <input type="text" placeholder='search by notes' 
    className='form-control' value={searchText} onChange={changeSearchText}/>
  )
}
