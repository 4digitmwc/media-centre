import React from 'react';
import ThumbnailButton, {
  IThumbnail,
} from '../../components/ThumbnailButton/ThumbnailButton';
import styles from './Home.module.scss';

const ThisWeekHighLight: IThumbnail = {
  redirect_url: '/media-centre/',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 640,
    height: 480,
  },
  text: 'This week Highlight',
};

const StoryOfTheWeek: IThumbnail = {
  redirect_url: '/media-centre/#/stories',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 160,
  },
  text: 'Story of the week',
};

const InterviewForTheWeek: IThumbnail = {
  redirect_url: '/media-centre/#/interviews/sample.md',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 160,
  },
  text: 'Interview for the week',
};

const OpinionofTheWeek: IThumbnail = {
  redirect_url: '/media-centre/#/opinions/sample.md',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 160,
  },
  text: 'Opinion of the week',
};

const StatisticsDashboard: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 640,
    height: 1000,
  },
  text: 'Statistics Dashboard',
};

const FantasyLeague: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 200,
  },
  text: 'Fantasy League',
};

const PickBanStatistics: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 200,
  },
  text: 'Pick/Ban Statistics',
};

const ScoreHighlights: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 200,
  },
  text: 'Score Highlights',
};

const Leaderboards: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 200,
  },
  text: 'Leaderboards',
};

const DownloadStatistics: IThumbnail = {
  redirect_url: 'https://www.youtube.com/watch?v=fowOHiOJC7g',
  thumbnail_url:
    'https://cdn.discordapp.com/attachments/807426115210706974/1047761320419799110/pexels-tobias-bjrkli-2113554.jpg',
  size: {
    width: 210,
    height: 200,
  },
  text: 'Download Statistics',
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
            <ThumbnailButton {...DownloadStatistics} />
          </div>
          <ThumbnailButton {...StatisticsDashboard} />
        </div>
      </div>
    );
  }
}

export default Home;
