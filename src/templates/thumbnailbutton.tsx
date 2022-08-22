import React from "react"

export interface IThumbnail {
    redirect_url: string,
    thumbnail_url: string,
    size: {
        width: number,
        height: number
    }
}

const ThumbnailButton: React.FC<{thumbnail: IThumbnail}> = ({thumbnail: {redirect_url, thumbnail_url, size: {width, height}}}) => {
    return <img src={thumbnail_url} alt="aaaa" style={{width, height}} onClick={() => window.open("/#" + redirect_url)} />
}

export default ThumbnailButton
