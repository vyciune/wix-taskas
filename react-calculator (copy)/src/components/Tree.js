import React, {useState} from "react";
import NodeIte from "./NodeIte";
import Node from "./Node"
import {initData} from "../data/data";

export const hasChildren = (node) => node?.children && node.children.length > 0;
const getNewId = () => Date.now()
const findRecursive = (node, id, value) => {
    if (node.id.toString() === id) {
        const newNode = {children: [], name: value}
        const newChildren = [...node.children, {...newNode, id: getNewId()}]
        return {
            name: node.name,
            id: node.id,
            children: newChildren
        }
    } else if (hasChildren(node)) {
        return {
            name: node.name,
            id: node.id,
            children: node.children.map(child => findRecursive(child, id, value))
        }
    }
    return node;
}

export default function Tree() {
    const [data, setData] = useState(initData)
    const addChild = (parentId, value) => {
        return findRecursive(data, parentId, value)
    }

    const addValue = (e) => {
        e.preventDefault();
        const target = e.currentTarget[0];
        const [parentId, value] = [target.id, target.value];
        const newData = addChild(parentId, value);
        setData({...newData})
        e.target.reset()
    }

    return (
        <div style={{paddingLeft: "50px", paddingTop: "50px", display: "grid", gridAutoFlow: "column"}}>
            <div>
                Iterative
                <NodeIte data={data} addValue={addValue}/>
            </div>
            <div>
                Recursive
                <Node data={data} addValue={addValue}/>
            </div>
        </div>
    )
}

