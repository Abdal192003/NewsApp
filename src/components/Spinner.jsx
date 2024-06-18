import React, { Component } from 'react'
import preloader from './preloader.gif'

export default function Spinner() {
    return (
      <div className='text-center'>
        <img src={preloader} alt="#" />
      </div>
    )
}
