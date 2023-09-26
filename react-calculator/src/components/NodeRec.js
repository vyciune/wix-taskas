import {useState} from "react";

export default function NodeRec({name, padding}) {
    const [children, setChildren] = useState([]);

    const addChild = (event) => {
        event.preventDefault();
        setChildren([...children, event.target[0].value])
        event.target.reset()
    }

    return (
        <div style={{paddingLeft: `${padding}px`, paddingTop: "5px"}}>

            <div style={{display: "flex", flexFlow: "row", gap: "5px"}}>
                <div style={{width: "60px"}}>{name}</div>

                <form onSubmit={addChild} style={{gap: "5px", display: "flex"}}>
                    <input style={{width: "40px"}} type="text" name={"newChild"}/>
                    <button type={"submit"}>Add</button>
                </form>
            </div>

            <div style={{display: "flex", flexFlow: "column"}}>
                {children.map((child, index) => (<NodeRec name={child} key={index} padding={padding + 25}/>))}
            </div>
        </div>
    )
}