import React, {useState} from "react";
import NodeRec from "./NodeRec";

export default function Tree() {
    const [nodes, setNodes] = useState([])

    return (
        <div style={{paddingLeft: "50px", paddingTop: "50px", display: "grid", gridAutoFlow: "column"}}>
            <div>
                Iterative
                {/*<Node/>*/}
            </div>
            <div>
                Recursive
                <NodeRec name={"First"} padding={0}/>
            </div>
        </div>
    )
}

