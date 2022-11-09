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
    return <section>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </section>
}

const Profile: React.FC<{profile: IProfile}> = ({profile: {username, profile_link, profile_pic_url, description}}) => {
    return <section>
        <img src={profile_pic_url} alt={username} width={64} height={64} />
        <a href={profile_link}>{username}</a>
        <article>
            {description}
        </article>
    </section>
}

const Story: React.FC<{story: IStory}> = ({story: {image, header, article_url, author}}) => {
    return <div className={styles.parallax_scrolling} style={{backgroundImage: image}}>
        {/* Header */}
        <Header header={header} />
        {/* Story */}
        <Article article_url={article_url} />
        {/* Profile */}
        <Profile profile={author} />
    </div>
}

export default Story
