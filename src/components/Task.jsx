import React,{useState,useEffect} from 'react'
import styles from "./styles.css"
import remove from "../assets/remove.png"
import unchecked from "../assets/circle.png"
import checked from "../assets/check.png"

const Task = ({body}) => {

    const [status, setStatus] = useState(false);
    const handleClick = () => {
      setStatus(!status);
    };
    const [render, setRender] = useState(true);
    const handleDelete = () =>{
        setRender(!render)     
    }

if(!render) return
 else {
    const textDecoration = status ? "line-through" : "none";
    return (
      <div className="item flex" >
          <div className="item-text flex" onClick={handleClick}>
              <img src={status ? checked : unchecked } className="circle"/>
              <h3 className="h3" style={{textDecoration}}>{body}</h3>
          </div>
          <img src={remove} className="remove" onClick={handleDelete}/>
      </div>
    )
 }

}

export default Task