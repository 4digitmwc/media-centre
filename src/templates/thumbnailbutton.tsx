import React, { useState } from "react"
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
    const [textStyle, setTextStyle] = useState<any>({
        right:"3%", 
        top: height - width / 5 + 5, 
        fontSize:width / 15
    })
    const [imageStyle, setImageStyle] = useState<any>({opacity: 1})
    const toggleImageBlur = () => {
        setImageStyle({opacity: 0.7})
    }
    const toggleImageDefault = () => {
        setImageStyle({opacity: 1})
    }
    const toggleTextUnderline = () => {
        setTextStyle({...textStyle, textDecoration: "underline"})
    }
    const toggleTextDefault = () => {
        setTextStyle({...textStyle, textDecoration:"none"})
    }
    const openArticle = () => {
        window.open(redirect_url)
    }
    return <article className={styles.card} onClick={openArticle}>
                <img 
                    src={thumbnail_url} 
                    width={width} 
                    height={height} 
                    style={imageStyle} 
                    onMouseOver={toggleImageBlur} 
                    onMouseLeave={toggleImageDefault} 
                    alt="background"
                /> 
                <p 
                    className={styles.thumbnailText} 
                    style={textStyle} 
                    onMouseOver={toggleTextUnderline}
                    onMouseLeave={toggleTextDefault}
                >
                    {text}
                </p>
            </article>
}

export default ThumbnailButton
