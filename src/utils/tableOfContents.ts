import generateSlug from "./generateSlug"

const tableOfContents = (markdown: string) => {
    const markdownLines = markdown.split("\n")
    const headers = markdownLines.filter(md => {
        return md.split(" ")[0][0] === "#" 
    })
    const tableContents = headers.map(header => {
        const headerSplit = header.split(" ")
        const headerContent = headerSplit.slice(1).join(" ")
        const headerLevel = headerSplit[0].length
        let content: string
        if (headerLevel === 1) {
            content = headerSplit.slice(1).join(" ")
        }
        else {
            content = "\t".repeat(headerLevel - 2) + "- "
            content += `[${headerContent}](#${generateSlug(headerContent)})`
        }
        return content
    })
    return "## Table of Contents\n" + tableContents.join("\n")
}

export default tableOfContents
