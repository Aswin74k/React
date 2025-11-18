import React from 'react'

const Items = () => {
    const fruitItems = ['apple', 'Banana', 'orange']
    return (
        <div>
            <ul>
                {fruitItems.map((fs,index)=>(
                    <li 
                     key={index}>
                        {fs}
                        </li>

                ))}
            </ul>
        </div>
    )
}

export default Items