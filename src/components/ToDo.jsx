import React,{useState, useEffect} from "react"
import styles from "./styles.css"
import Task from "./Task"


const ToDo = () =>{

    const [tasks,setTasks] = useState(()=>{
        const localValue = localStorage.getItem("ITEM");
        if (localValue==null) return []
        else return JSON.parse(localValue)
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("ITEM", JSON.stringify(tasks))
    }, [tasks])

    const handleAdd = () =>{
        const newTask = {
            id: Date.now(),
            body:input,
        };
        setTasks([...tasks, newTask]);
        setInput("");
    };

    return(
    <>
        <div className="flex">
            <div className="card flex column">
                <h1>To Do List</h1>
                <div className="bar flex" >
                    <input
                    type="text" placeholder="Add your task"
                    className="input"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)
                    }
                    onKeyPress={(e)=> e.key=="Enter" ? handleAdd() : "" }  
                     />
                    <button className="add" onClick={handleAdd}>Add</button>
                </div>
                <div className="lista flex column">
                    {tasks.map((task)=>(
                        <Task key={task.id} body={task.body}/>
                    ))}

                </div>

            </div>
        </div>

    </>
    )
}


export default ToDo

