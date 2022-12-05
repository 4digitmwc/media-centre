import React from "react"
import { Story } from "../templates"
import {IStory} from "../templates/story" 

const sample_story: IStory = {
    header: {
        title: "Chapter 0: Civilizations",
        subtitle: "Do extraterrestrial beings really exist? How do they look? Will they provision us with a home to live in?"
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/sample.md",
    author: {
        profile_link: "https://osu.ppy.sh/u/10879600",
        username: "IndexError",
        profile_pic_url: "https://i1.sndcdn.com/avatars-Iupp3CJ3dozLl03E-29z6mQ-t500x500.jpg",
        description: "This is the description of HowToPlayLN"
    },
    image: "https://mike42.me/blog/wp-content/uploads/2017/12/stars-rounded.png"
}

const Stories: React.FC = () => {
    return <Story story={sample_story} />
}

export default Stories
