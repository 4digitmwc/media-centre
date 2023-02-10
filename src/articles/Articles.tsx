import { IPost } from "../components/Post/Post"
import { HowToPlayLN, Auxesiaa, Arccat, Leon, TheFunk, Polytetral, Komi, Evening, Polytetral_as_Index, PorkIsGreat } from "./Profiles"

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
    table_of_content: false
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
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: false
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
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: false
  }
}

const week2: IArticle = {
  postName: 'contamination',
  post: {
    header: {
      title: 'Chapter 2: Contamination',
      subtitle: 'An innocent action can have uncontrollable outcomes'
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/week2.md',
    authors: [Leon, Auxesiaa],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: false
  }
}

const week3: IArticle = {
  postName: "antagonism",
  post: {
    header: {
      title: "Chapter 3: Antagonism",
      subtitle: "Along the monochromatic world of Zion, was that tragedy brought us here?"
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/week3.md',
    authors: [Polytetral_as_Index, Auxesiaa],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: false
  }
}

const week4: IArticle = {
  postName: "uncertainty",
  post: {
    header: {
      title: "Chapter 4: Navigating the Uncertainty",
      subtitle: "As Index investigates the untimely death of the girl causing chaos all over Zion, he discovers bits and pieces of his past life that may connect the dots of this mystery"
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/stories/week4.md",
    authors: [HowToPlayLN],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: false
  }
}

const stories = [week0, week1, week2, week3, week4]

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
    table_of_content: false
  }
}

const week1_interview: IArticle = {
  postName: "week-1",
  post: {
    header: {
      title: 'Post Qualifiers Interview',
      subtitle:
        'Let\'s see how the first seed Singapore, and the newborn team, Nicaragua are doing! Alongside with the Carbonara tips from Italy!',
    },
    article_url:
      'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/interviews/week1.md',
    authors: [Arccat, TheFunk, Polytetral],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
  }
}

const week2_interview: IArticle = {
  postName: "week-2",
  post: {
    header: {
      title: 'Team Insights: RO32 Interview',
      subtitle: "Many notable matches and interesting sparks have resulted from the Round of 32. Today we take it to Team Philippines for the first tiebreaker of the tournament, Poland for their seed upset, and Thailand propaganda publicity!"
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/interviews/week2.md',
    authors: [Arccat, Polytetral, HowToPlayLN],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
  }
}

const week3_interview: IArticle = {
  postName: "week-3",
  post: {
    header: {
      title: '4DMWC 5 RO16 Interviews ft. USA, Canada & Itourith (Chile)!!!',
      subtitle: "The United States of Strategies, Canada's revenge arc, & the re-emergence of Chile!"
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/interviews/week3.md',
    authors: [PorkIsGreat],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
  }
}

const week4_interview: IArticle = {
  postName: "week-4",
  post: {
    header: {
      title: '4DMWC 5 QFs interviews ft. Sweden, Japan, & Brazil!',
      subtitle: "Sweden's unfortunate exit, Japan's hot momentum continues, & Brazil's eyeing for podium!"
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/interviews/week4.md',
    authors: [PorkIsGreat],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
  }
}

const interviews = [week1_interview, week2_interview, week3_interview, week4_interview]

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
    table_of_content: false
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
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
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
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: false
  }
}

const week2_opinion: IArticle = {
  postName: 'percy',
  post: {
    header: {
      title: 'Percy LNs: A Scourge or A Blessing?',
      subtitle: 'Percy LNs have revolutionised modern LN play, with players achieving crazier and increasingly unfathomable LN scores with each passing day. At the same time, they have caused minor disagreements amongst players. So what are Percy LNs exactly, and what effect do they have on osu!mania gameplay?'
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/opinions/week2.md',
    authors: [Auxesiaa],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: true
  }
}

const week3_opinion: IArticle = {
  postName: 'evolution-tournaments',
  post: {
    header: {
      title: 'Evolution of the meta in osu!mania Tournament Maps',
      subtitle: 'What was our community like back in the days? And how the meta ended up being what we are witnessing these days?'
    },
    article_url: 'https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/opinions/week3.md',
    authors: [Auxesiaa, Polytetral, Leon, HowToPlayLN],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: true,
  }
}

const opinions = [week0_opinion, week1_opinion, week2_opinion, week3_opinion]

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
    table_of_content: false
  }
}

const ro32_highlight: IArticle = {
  postName: "ro32",
  post: {
    header: {
      title: "Philippines vs. Japan: The initialization of the essence",
      subtitle: "The tiebreaker is undeniably the essence of all tournaments, how does this match gets into the first tiebreaker of this tournament?"
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/highlights/ro32.md",
    authors: [Leon, HowToPlayLN],
    image: 'https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662',
    table_of_content: true
  }
}

const ro16_highlight: IArticle = {
  postName: "ro16",
  post: {
    header: {
      title: "The Discovery Begins",
      subtitle: "Media Centre brings to you an interpretation of the uncovered match between Thailand and the United States!"
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/highlights/ro16.md",
    authors: [Polytetral],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: true
  }
}

const qf_highlight: IArticle = {
  postName: "qf",
  post: {
    header: {
      title: "Japan vs Sweden: The greatest comeback or the inevitable defeat?",
      subtitle: "Sweden tried to escape the sweep from Japan, do they succeed? Or it was an inevitable fate?"
    },
    article_url: "https://raw.githubusercontent.com/4digitmwc/media-centre-articles/main/highlights/qf.md",
    authors: [PorkIsGreat],
    image: "https://media.discordapp.net/attachments/672354730814734336/994520362261950524/Background.png?width=1178&height=662",
    table_of_content: true
  }
}

const highlights = [ro32_highlight, ro16_highlight, qf_highlight]

export const Articles: IArticles = {
  stories, interviews, opinions, highlights
}
