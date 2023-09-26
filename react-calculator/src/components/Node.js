import {useState} from "react";

export default function Node({padding}) {
    const initChildren = [
        {
            name: "First",
            children: [
                {name: "second", children: []},
                {name: "second", children: []}
            ]
        },
        {
            name: "First",
            children: [
                {name: "second", children: []},
                {name: "second", children: []}
            ]
        }
    ]
    const [children, setChildren] = useState(initChildren);

    const renderChildren = () => {
        const htmlArr = [];
        while (children) {
            const renderedHtml = children
                .map((child, index) => (
                        <div key={index}>{child.name}</div>
                    )
                )
            htmlArr.push(renderedHtml)
        }
        debugger
        return htmlArr;
    }

    // const fileTree= renderChildren();

    return (
        <div style={{paddingLeft: `${padding}px`, paddingTop: "5px"}}>
            <div style={{display: "flex", flexFlow: "column"}}>
                {fileTree}
            </div>
        </div>
    )
}