import React from "react"
import Article from "./article"
import styles from "./story.module.css"

export interface IHeader {
    title: string
    subtitle: string
}

export interface IProfile {
    username: string,
    profile_link: string,
    profile_pic_url: string,
    description: string
}

export interface IStory {
    image: string,
    header: IHeader,
    article_url: string,
    author: IProfile
}

const Header: React.FC<{header: IHeader}> = ({header: {title, subtitle}}) => {
    return <section className={styles.header}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </section>
}

const Profile: React.FC<{profile: IProfile}> = ({profile: {username, profile_link, profile_pic_url, description}}) => {
    return <section style={{textAlign: "right", marginLeft: 40}}>
        <img src={profile_pic_url} alt={username} width={64} height={64} />
        <a href={profile_link}>{username}</a>
        <article>
            {description}
        </article>
    </section>
}

const Story: React.FC<{story: IStory}> = ({story: {image, header, article_url, author}}) => {
    const parallax_scrolling = {
        backgroundAttachment: "fixed",
        bacckgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`
    }
    return <div style={parallax_scrolling}>
        {/* Header */}
        <Header header={header} />
        {/* Story */}
        <div style={{backgroundSize: "100% auto", backgroundColor: "rgba(0,0,0,50%)", display: "flex"}}>
            <Article article_url={article_url} />
            {/* Profile */}
            <Profile profile={author} />
        </div>
        
       
    </div>
}

export default Story
