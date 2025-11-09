import React from 'react'


const CallingFunction = () => {



    function Greeting(name) {
        return `Hello,${name}`;

    }

    function GetGreeting() {

        return <h2>{Greeting("Mufeedha")}</h2>;

    }
    return (
        <div>
            <GetGreeting/>
        </div>
    )
}

export default CallingFunction
