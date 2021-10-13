import React,{ useState,useRef,useEffect } from 'react'
import Button from './Button';
import List from './List';
import axios from 'axios'
//
const ShoppingList = () => {

    let [listItems, setListItems] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/items")
        .then((response)=>{
            console.log(response)
           setListItems([...response.data])
        })

       
    },[])


    const inputRef=useRef();
    const handleSubmit=e=>{
        e.preventDefault();
        
        let obj={
            // _id:Math.floor(Math.random()*1000),
            text:inputRef.current.value
        }
        axios.post("http://localhost:3000/api/items",obj)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>console.log(err.message))
        const ele=[...listItems,obj]
        setListItems(ele)
        console.log(listItems)
    }
    const deleteButton=e=>{
        setListItems([])
    }
    return (
        <div 
        className="bg-gray-500 text-white
                    mt-8 ml-80 mr-80 p-5 
                    rounded border-4 border-gray-900 
                    border-opacity-100">
            <form 
            className="grid place-items-center mt-14" onSubmit={handleSubmit}>
  
            <input type='text'
                    placeholder='What do you want to shop?'
                    ref={inputRef}
                    name='text'
                    className="text-black font-bold px-3 py-3 mb-5 border-2 border-gray-800 rounded text-lg shadow outline-none focus:ring"
                />
                <div className="flex space-x-4">
                <Button/>
                <Button func={deleteButton}/>
                </div>
                
                <List listItems={listItems}  text={()=>prompt("Enter the edited value")} setListItems={setListItems}/>
            </form>
        </div>
        
    )
}

export default ShoppingList
