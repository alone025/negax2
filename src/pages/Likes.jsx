import React from 'react'
import LikesItem from '../components/LikesItem'
import Footer from '../components/Footer'

const Likes = () => {
 
const datas=[
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
    {
        name: 1
    },
]



    return (
        <div>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5'>
                   {
                    datas.map((data,index)=>(
                        <LikesItem key={index}/>
                    ))
                   }
                </div>
        </div>
  )
}

export default Likes