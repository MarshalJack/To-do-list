import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddPost from '../add-post/addPost'
import Filter from '../filter/filter'
import Header from '../header'
import ItemList from '../item-list/itemList'
import Search from '../search'
import './app.css'

export default function App() {
  const [data,setData]= useState([
    {label:'Learn React', id:0, bookmarked:false ,liked:false},
    {label:'Drinking coffe', id:1, bookmarked:false,liked:false},
    {label:'Rest...', id:2, bookmarked:false,liked:false}
  ])
  const[itemID, setItemID]=useState(data.length)
  const[searchText, setSearchText]=useState('')
  const[finishData,setFinishData]=useState(data) 
  const[filterClass,setFilterClass]=useState("All")

useEffect(()=>{
  setFinishData(data)
},[data])
useEffect(()=>{
  onSearch()
},[searchText])
  const showFilter=(name)=>{
     if (name==="Liked"){
       setFinishData(finishData.filter(item=>item.liked===true)) 
       setFilterClass('Liked')
       return finishData
     }
     else{
      setFinishData(data)
      setFilterClass('All')
      return finishData
     }
  }
  const onSearch=()=>{
    if(searchText.length>0){
      setFinishData(finishData.filter(item=>item.label.includes(searchText))) 
      return finishData
    }
    else {
      if(filterClass==="All"){
        setFinishData(data)
        return finishData
      }
      else{
        let mas=[]
        data.forEach(item=>{
          if(item.liked===true){
            mas.push(item)
          }
        })
        setFinishData(mas)
        return finishData
      }
    }
  }
  const addPost=(text)=>{
     let newItem={
      label:text,
      id:itemID,
      bookmarked:false,
      liked:false
     }
     let newData=[...data,newItem]
     setData(newData)
     setItemID(val=>val+1)
     console.log(data)
  }
  const remove=(id)=>{
   let itemIndex= data.findIndex(item=>item.id===id)
   let newData=[...data.slice(0,itemIndex),...data.slice(itemIndex+1)]
   setData(newData)
}
const onLike=(id)=>{
  let itemIndex= data.findIndex(item=>item.id===id)
  let newItem={...data[itemIndex],liked:!data[itemIndex].liked}
  let newData=[...data.slice(0,itemIndex),newItem,...data.slice(itemIndex+1)]
  setData(newData)
}  
  const bookmark=(id)=>{
    
    data.forEach((el,index)=>{
    if(el.id===id){
    let newItem={...data[index],bookmarked:!data[index].bookmarked}
    let newData=[...data.slice(0,index),newItem,...data.slice(index+1)]
    setData(newData)
    }
    })
  }  

  return (
    <div className='App'>
        <Header data={finishData}/>
       <div className='d-flex '>
        <Search searchText={searchText} setSearchText={setSearchText}  onSearch={onSearch}/>
         <Filter showFilter={showFilter} filterClass={filterClass}/>
         </div> 
    <ItemList data={finishData} bookmark={bookmark}  remove={remove} onLike={onLike}/>
    <AddPost addPost={addPost}/>
    </div>
  )
}
