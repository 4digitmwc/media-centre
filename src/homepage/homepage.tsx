import React from "react"
import ThumbNailButton, { IThumbnail } from "../templates/thumbnailbutton"
import HomePageStyles from "./homepage.module.css"

const ThisWeekHighLight: IThumbnail = {
    redirect_url: "/",
    thumbnail_url: "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    size: {
        width: 640,
        height: 480
    }
}

const StoryOfTheWeek: IThumbnail = {
    redirect_url: "/stories/sample.md",
    thumbnail_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
    size: {
        width: 160,
        height: 120
    }
}

const HomePage: React.FC = () => {
    return <div className={HomePageStyles.homepage}>
        <ThumbNailButton thumbnail={ThisWeekHighLight} />
        <ThumbNailButton thumbnail={StoryOfTheWeek} />
    </div>
}

export default HomePage
