import React from "react"
import Doodle from "../../projects/doodle"
import Store from "../../projects/doodle/Store"

export default function Root(){
    return (
        <Store>
            <Doodle />
        </Store>
    )
}