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
}

// Authors

const HowToPlayLN: IProfile = {
  profile_link: 'https://osu.ppy.sh/u/10879600',
  username: 'IndexError',
  profile_pic_url:
    'https://i1.sndcdn.com/avatars-Iupp3CJ3dozLl03E-29z6mQ-t500x500.jpg',
  description: 'This is the description of HowToPlayLN',
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
    image: 'https://mike42.me/blog/wp-content/uploads/2017/12/stars-rounded.png',
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
    author: HowToPlayLN,
    image: 'https://mike42.me/blog/wp-content/uploads/2017/12/stars-rounded.png',
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
    author: HowToPlayLN,
    image: 'https://mike42.me/blog/wp-content/uploads/2017/12/stars-rounded.png',
  }
}

const opinions = [sample_opinion]

export const Articles: IArticles = {
  stories, interviews, opinions
}
