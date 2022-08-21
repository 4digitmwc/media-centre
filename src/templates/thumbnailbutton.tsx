import React from "react"

export interface IThumbnail {
    text: string,
    thumbnail_url: string,
    size: {
        width: number,
        height: number
    }
}

const ThumbnailButton: React.FC<IThumbnail> = ({text, thumbnail_url, size: {width, height}}) => {
    return <div>

    </div>
}

export default ThumbnailButton
