import React from 'react'

export default function Filter({showFilter, filterClass}) {
  const buttonsMas=[
    {name:'All'},
    {name:'Liked'}
  ]
  const buttons=buttonsMas.map((item,index)=>{
    let cls=item.name===filterClass?"btn btn-primary":"btn btn-outline-primary"
    return(
      <button className={cls} key={index} onClick={()=>showFilter(item.name)}>{item.name}</button>
    )
  })
  return (
    <div className='d-flex '> 
     {buttons}
    </div>
  )
}
