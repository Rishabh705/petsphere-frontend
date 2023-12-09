import React from 'react'
import { BiLeftArrow,BiRightArrow } from 'react-icons/bi'
export default function PageCount({page,setPage, count}) {
    const increment = () => {
        if(count>=20) //so that page deosn't change when there are less than 20 results
            setPage(prev => prev + 1)
    }
    const decrement = () => {
        if (page > 1) { // Ensure page doesn't go below 1
            setPage(prev => prev - 1)
        }
    }
    return (
        <div className="pages">
            <BiLeftArrow color='gray' onClick={decrement} />
            <h5>{page}</h5>
            <BiRightArrow color='gray' onClick={increment} />
        </div>
    )
}
