import { IPost } from "../components/Post/Post"
import { HowToPlayLN, Auxesiaa, Arccat, Leon, TheFunk, Polytetral, Komi, Evening } from "./Profiles"

export interface IArticle {
  postName: string;
  post: IPost;
}

export interface IArticles {
  stories: IArticle[];
  interviews: IArticle[];
  opinions: IArticle[];
  highlights: IArticle[]
}

// Stories

const sample_story: IArticle = {
  postName: "week-0-sample",
  post: {
    header: {
      title: 'Chapter 0: Civilizations',
      subtitle:
        'Do extraterrestrial beings really exist? How do they look? Will they provision us with a home to live in?',
    },
    article_url:
      'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/sample.md',
    authors: [HowToPlayLN, Auxesiaa],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const week0: IArticle = {
  postName: 'infinity',
  post: {
    header: {
      title: 'Chapter 0: Infinity',
      subtitle: 'As one\'s story and life approaches its limit, another one starts in search of continuity of mankind.'
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/week0.md',
    authors: [Polytetral, HowToPlayLN],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662'
  }
}

const week1: IArticle = {
  postName: 'wandering',
  post: {
    header: {
      title: 'Chapter 1: Wandering',
      subtitle: "A new beginning rises over the horizon as the endless space expedition finally leads to discovery."
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/week1.md',
    authors: [HowToPlayLN],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662'
  }
}

const stories = [week0, week1]

// Interviews

const sample_interview: IArticle = {
  postName: "week-0-sample",
  post: {
    header: {
      title: 'Media Centre Interview Week 0: Antarctica Team',
      subtitle:
        'The tiebreaker is undeniably the essence of all tournaments. It is the fruit of hard work, the culmination of a valiant effort to fight, and the manifestation of absolute determination. It is the desperation that creates friendship, the flood of adrenaline that replenish life, and the myriad of emotion that makes one feel ever so momentarily blissful that they could relish in the very moment where everyone belongs in a game. I really love the tiebreaker',
    },
    article_url:
      'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/interviews/sample.md',
    authors: [Arccat, TheFunk],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const interviews = [sample_interview]

// Opinions

const sample_opinion: IArticle = {
  postName: "week-0-sample",
  post: {
    header: {
      title: 'In Depth of LeeKong',
      subtitle:
        'No one ever knows who is LeeKong, even LeeKong himself still questions who he is. It is time to figure out who is LeeKong!',
    },
    article_url:
      'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/opinions/sample.md',
    authors: [Auxesiaa, Polytetral],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const week0_opinion: IArticle = {
  postName: 'managing-ambitious-tournaments',
  post: {
    header: {
      title: 'Be Ambitious and Be Cautious!',
      subtitle: 'It is one thing to start a tournament with passion, but what really ensures that staffs strive to give their best week after week of labour, players continue to buy your idea with enthusiasm, and leave spectators craving for more following every stage? In other words, what makes a tournament truly succeed beyond simple completion?'
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/opinions/week0.md",
    authors: [Polytetral],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662'
  }
}

const week1_opinion: IArticle = {
  postName: 'mathematical-maniac',
  post: {
    header: {
      title: 'Coffee Session with Mathematical Maniacs',
      subtitle: 'What was hidden inside the mind of Mathematical Maniacs? How do they use math to create the fascinating phenomenas in osu!mania? Let\'s find out in this coffee session discussion!'
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/opinions/week1.md",
    authors: [Evening, Komi, HowToPlayLN],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662"
  }
}

const opinions = [week0_opinion, week1_opinion]

// Highlights

const sample_highlight: IArticle = {
  postName: "week-0-sample",
  post: {
    header: {
      title: 'Mikuaimbot vs. The World',
      subtitle:
        'ok he pull up',
    },
    article_url:
      'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/highlights/sample.md',
    authors: [TheFunk],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const highlights = [sample_highlight]

export const Articles: IArticles = {
  stories, interviews, opinions, highlights
}
