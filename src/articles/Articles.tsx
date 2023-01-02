import { IPost } from "../components/Post/Post"
import { IProfile } from "../components/Post/modules/Profile"

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

// Authors

const HowToPlayLN: IProfile = {
  profile_link: 'https://osu.ppy.sh/u/10879600',
  username: 'IndexError',
  profile_pic_url:
    'https://i1.sndcdn.com/avatars-Iupp3CJ3dozLl03E-29z6mQ-t500x500.jpg',
  description: 'list index out of range',
}

const Arccat: IProfile = {
  profile_link: "https://osu.ppy.sh/users/4848294",
  username: "cat",
  profile_pic_url: "http://s.ppy.sh/a/4848294",
  description: "sv cat. fart cart."
}

const TheFunk: IProfile = {
  profile_link: "https://osu.ppy.sh/users/13981991",
  username: "TheFunk",
  profile_pic_url: "http://s.ppy.sh/a/13981991",
  description: "Intern here but I'm just here for Capybaras"
}

const Auxesiaa: IProfile = {
  profile_link: "https://osu.ppy.sh/users/16417718",
  username: "Aux",
  profile_pic_url: "http://s.ppy.sh/a/16417718",
  description: "Pēdīcābo ego vōs et irrumābō"
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
    author: HowToPlayLN,
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const stories = [sample_story]

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
    author: Arccat,
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
    author: Auxesiaa,
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const opinions = [sample_opinion]

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
    author: TheFunk,
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
  }
}

const highlights = [sample_highlight]

export const Articles: IArticles = {
  stories, interviews, opinions, highlights
}
