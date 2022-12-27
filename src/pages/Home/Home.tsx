import React from 'react';
import ThumbnailButton, {
  IThumbnail,
} from '../../components/ThumbnailButton/ThumbnailButton';
import styles from './Home.module.scss';

const Width = 650
const HighlightHeight = 360
const StatisticsHeight = 480

const ThisWeekHighLight: IThumbnail = {
  redirect_url: '/media-centre/highlights',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width,
    height: HighlightHeight,
  },
  text: 'This week Highlight',
};

const StoryOfTheWeek: IThumbnail = {
  redirect_url: '/media-centre/stories',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: HighlightHeight / 3,
  },
  text: 'Story of the week',
};

const InterviewForTheWeek: IThumbnail = {
  redirect_url: '/media-centre/interviews',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: HighlightHeight / 3,
  },
  text: 'Interview for the week',
};

const OpinionofTheWeek: IThumbnail = {
  redirect_url: '/media-centre/opinions',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: HighlightHeight / 3,
  },
  text: 'Opinion of the week',
};

const StatisticsDashboard: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width,
    height: StatisticsHeight,
  },
  text: 'Statistics Dashboard',
};

const FantasyLeague: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: StatisticsHeight / 5,
  },
  text: 'Fantasy League',
};

const PickBanStatistics: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: StatisticsHeight / 5,
  },
  text: 'Pick/Ban Statistics',
};

const ScoreHighlights: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: StatisticsHeight / 5,
  },
  text: 'Score Highlights',
};

const Leaderboards: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: StatisticsHeight / 5,
  },
  text: 'Leaderboards',
};

const SkillBans: IThumbnail = {
  redirect_url: 'https://4digitmwc.github.io/skillban-articles/',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: Width / 3,
    height: StatisticsHeight / 5,
  },
  text: 'Skillbans',
};

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homepage}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ThumbnailButton {...ThisWeekHighLight} />
          <div style={{ display: 'block' }}>
            <ThumbnailButton {...StoryOfTheWeek} />
            <ThumbnailButton {...InterviewForTheWeek} />
            <ThumbnailButton {...OpinionofTheWeek} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'block' }}>
            <ThumbnailButton {...FantasyLeague} />
            <ThumbnailButton {...PickBanStatistics} />
            <ThumbnailButton {...ScoreHighlights} />
            <ThumbnailButton {...Leaderboards} />
            <ThumbnailButton {...SkillBans} />
          </div>
          <ThumbnailButton {...StatisticsDashboard} />
        </div>
      </div>
    );
  }
}

export default Home;
