import React, { useState, useContext } from "react"
import { Names } from "../context/NameContext"

const InputComp = () => {
    const { save, setSave } = useContext(Names)

    const lastname = (e) => {
        setSave({ ...save, lastName: e.target.value })
    }
    const firstname = (e) => {
        setSave({ ...save, fristName: e.target.value })
    }

    const subHandeler = (e) => {
        e.preventDefault()

        //USE IF U WANT THE VALUE ON SUBMIT
    }

    return (
        <div>
            <form onSubmit={subHandeler}>
                <label> Firstname</label>
                <input
                    type="text"
                    plaeholder="firstname"
                    onChange={firstname}
                />
                <label> Lastname</label>
                <input type="text" plaeholder="Lastname" onChange={lastname} />
                <button type="submit">Sänd</button>
            </form>
        </div>
    )
}

export default InputComp
