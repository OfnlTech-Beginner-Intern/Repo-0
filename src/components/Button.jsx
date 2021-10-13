import React from 'react'

const Button = ({func}) => {
    const buttonChanger=(e)=>{
        e.preventDefault()
        func();
    }
    return (
        
        <button onClick={func?buttonChanger:null} className="font-bold bg-purple-300 p-3 rounded hover:bg-purple-500 w-20" >
        {func?'Delete':'Add'}
       
        </button>
    )
}

export default Button
