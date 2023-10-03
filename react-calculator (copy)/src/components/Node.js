import {hasChildren} from "./Tree";

export default function Node({data, addValue}) {

    const renderNode = (node) => {
        return (
            <ul>
                <li style={{display: "flex", gap: "1rem"}} key={node.id}>
                    {node.name} {node.id}
                    <form onSubmit={e => addValue(e)}>
                        <input name={node.name} id={node.id} type={"text"} style={{width: "5rem"}} required/>
                        <button type={"submit"}>Add</button>
                    </form>
                </li>
                {hasChildren(node) && renderChildren(node.children)}
            </ul>
        )
    }

    const renderChildren = (children) => {
        return children.map(child => renderNode(child))
    }

    return (
        <div style={{display: "flex", flexFlow: "column"}}>
            {renderNode(data)}
        </div>
    )
}
