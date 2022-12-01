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
    return <article className={styles.card} onClick={() => window.open(redirect_url)}>
                <img src={thumbnail_url} width={width} height={height} alt="background"/> 
                <p className={styles.thumbnailText} style={{left:width - text.length * width / 15 / 2 - 1, top: height - width / 5, fontSize:width / 15}} 
                >{text}</p>
            </article>
}

export default ThumbnailButton
