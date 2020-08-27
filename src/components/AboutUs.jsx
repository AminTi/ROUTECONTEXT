import React from "react"
import { useContext } from "react"
import { Names } from "../context/NameContext"

const AboutUs = () => {
    const { save } = useContext(Names)

    return (
        <div>
            <h4> Firstname: {save.fristName} </h4>
            <h4> Lastname: {save.lastName} </h4>
        </div>
    )
}

export default AboutUs
