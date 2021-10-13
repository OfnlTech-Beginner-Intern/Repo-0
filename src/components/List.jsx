import React from 'react'

const List = ({listItems,setListItems,text}) => {
    return (
        <div>
            {
                listItems.map((ele)=>{
                return <div className="flex"> 
                            <div
                            className="p-3 mt-2 text-xl font-bold w-80 border-2 text-center"  
                            key={ele.id}>{ele.text}
                            
                            </div>
                            
                            <div className="flex space-x-4">
                                
                                <button onClick={(e)=>{
                                e.preventDefault();
                                const elemx=  listItems.filter((elem)=>elem.id!==ele.id)
                                setListItems(elemx)
                                }}>
                                    <div className="font-bold bg-purple-300 rounded hover:bg-purple-500 ml-3 w-10">del</div>
                                </button>

                                <button onClick={(e)=>{
                                e.preventDefault();
                                const elemx=  listItems.filter((elem)=>elem.id===ele.id)
                                const val=listItems.indexOf(elemx[0])
                                listItems[val].text=text();
                                setListItems([...listItems])
                                }}>
                                    <div className= "font-bold bg-purple-300 rounded hover:bg-purple-500 h-6 w-10">edit</div>
                                </button>
                                
                            </div>
                              
                           
                        </div>
                    })
            }
        </div>
    )
}

export default List
