import React, { useState } from 'react'
import styles from '../styles/idadeComponent.module.css'

const IdadeComponent = () => {

    const [age, setAge] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(age)


    }

  return (
    <div >
        <div style={{display:"grid", alignItems:"center", justifyContent:"center", margin:"10vh"}}>
        <h1 className={styles.title}>Qual a sua idade?</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <input type="number" placeholder='digite sua idade aqui!' onChange={(e) => localStorage.setItem("age", e.target.value)}  />
                </div>
                
                
            </form>
        </div>
        
        
    </div>
  )
}



export default IdadeComponent