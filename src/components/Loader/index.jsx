import React, {Component} from 'react'
import load from './leafload.gif'


function Loader() {
  const state = {
      loaderMounted: false
  }

  return (
   <>
  
      <img src={load} width='50rem'></img>
   
   </>
  )
}

export default Loader