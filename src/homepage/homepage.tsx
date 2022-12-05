import React from "react"
import ThumbnailButton, { IThumbnail } from "../templates/thumbnailbutton"
import HomePageStyles from "./homepage.module.css"

const ThisWeekHighLight: IThumbnail = {
    redirect_url: "/",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 640,
        height: 480
    },
    text: "This week Highlight"
}

const StoryOfTheWeek: IThumbnail = {
    redirect_url: "/#/stories/sample.md",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 160
    },
    text: "Story of the week"
}

const InterviewForTheWeek: IThumbnail = {
    redirect_url: "/#/interviews/sample.md",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 160
    },
    text: "Interview for the week"
}

const OpinionofTheWeek: IThumbnail = {
    redirect_url: "/#/opinions/sample.md",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 160
    },
    text: "Opinion of the week"
}

const StatisticsDashboard: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 640,
        height: 1000
    },
    text: "Statistics Dashboard"
}

const FantasyLeague: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 200
    },
    text: "Fantasy League"
}

const PickBanStatistics: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 200
    },
    text: "Pick/Ban Statistics"
}

const ScoreHighlights: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 200
    },
    text: "Score Highlights"
}

const Leaderboards: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 200
    },
    text: "Leaderboards"
}

const DownloadStatistics: IThumbnail = {
    redirect_url: "https://www.youtube.com/watch?v=fowOHiOJC7g",
    thumbnail_url: "https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg",
    size: {
        width: 210,
        height: 200
    },
    text: "Download Statistics"
}

const HomePage: React.FC = () => {
    return <div className={HomePageStyles.homepage}>
        <div style={{display: "flex", justifyContent: 'center'}}>
            <ThumbnailButton thumbnail={ThisWeekHighLight} />
            <div style={{display: "block"}}>
                <ThumbnailButton thumbnail={StoryOfTheWeek} />
                <ThumbnailButton thumbnail={InterviewForTheWeek} />
                <ThumbnailButton thumbnail={OpinionofTheWeek} />
            </div>
        </div>
        <div style={{display: "flex", justifyContent: 'center'}}>
            <div style={{display: "block"}}>
                <ThumbnailButton thumbnail={FantasyLeague} />
                <ThumbnailButton thumbnail={PickBanStatistics} />
                <ThumbnailButton thumbnail={ScoreHighlights} />
                <ThumbnailButton thumbnail={Leaderboards} />
                <ThumbnailButton thumbnail={DownloadStatistics} />
            </div>
            <ThumbnailButton thumbnail={StatisticsDashboard} />
        </div>
    </div>
}

export default HomePage
