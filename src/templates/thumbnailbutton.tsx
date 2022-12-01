import React from "react"
import styles from './thumbnailbutton.module.css'

export interface IThumbnail {
    redirect_url: string,
    thumbnail_url: string,
    size: {
        width: number,
        height: number
    }
    text: string
}

const ThumbnailButton: React.FC<{thumbnail: IThumbnail}> = ({thumbnail: {redirect_url, thumbnail_url, size, text}}) => {
    const {width, height} = size
    return <article className={styles.card}>
                <img src={thumbnail_url} width={width} height={height} alt="aaa"/> 
                <a href={redirect_url} className={styles.thumbnailText} style={{left:width - text.length * width / 15 / 2.1, fontSize:width / 15}} 
                >{text}</a>
            </article>
}

export default ThumbnailButton
