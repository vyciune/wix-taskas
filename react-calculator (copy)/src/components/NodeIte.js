import {hasChildren} from "./Tree";

export default function NodeIte({data, addValue}) {

    const renderData = (node) => {

        const stack = [node];
        const htmlStack = ["</ul>"];
        const childHtmlStack = []
        let childCount = 0;
        let htmlString = "<ul>";
        while (stack.length > 0) {

            const val = stack.pop();
            if (childCount > 0) {
                htmlString += "<ul>"
                childHtmlStack.push("</ul>")
            }
            htmlString += `<li>${val.name} ${val.id}</li>`
            if (childCount > 0) {
                htmlString += childHtmlStack.pop();
                childCount -= 1;
            }

            if (hasChildren(val)) {
                childCount = val.children.length;
                val.children.forEach(child => {
                    stack.push(child)
                })
            }
        }
        while (htmlStack.length > 0) {
            htmlString += htmlStack.pop();
        }
        return htmlString;
    }


    const htmlStr = renderData(data)
    return (
        <div dangerouslySetInnerHTML={{__html: htmlStr}}/>
    )
}
