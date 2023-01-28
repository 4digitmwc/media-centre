import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import generateSlug from '../../utils/generateSlug';
import tableOfContents from '../../utils/tableOfContents';

interface IArticle {
  article_url: string;
  table_of_content: boolean
}

interface IState {
  article: string;
  loading: boolean;
  error: boolean;
}

const MarkdownComponent: object = {
	h1: (props: any) => {
		const arr = props.children 
	  let heading = ''

	  for (let i = 0; i < arr.length; i++) {
	    if (arr[i]?.type !== undefined) {
	      for (let j = 0; j < arr[i].props.children.length; j++) {
	        heading += arr[i]?.props?.children[0]
	      }
	    } else heading += arr[i]
	  }

	  const slug = generateSlug(heading)
	  return <h1 id={slug}>{props.children}</h1>
	},
	h2: (props: any) => {
		const arr = props.children 
	  let heading = ''

	  for (let i = 0; i < arr.length; i++) {
	    if (arr[i]?.type !== undefined) {
	      for (let j = 0; j < arr[i].props.children.length; j++) {
	        heading += arr[i]?.props?.children[0]
	      }
	    } else heading += arr[i]
	  }

	  const slug = generateSlug(heading)
	  return <h2 id={slug}>{props.children}</h2>
	},
	h3: (props: any) => {
		const arr = props.children 
	  let heading = ''

	  for (let i = 0; i < arr.length; i++) {
	    if (arr[i]?.type !== undefined) {
	      for (let j = 0; j < arr[i].props.children.length; j++) {
	        heading += arr[i]?.props?.children[0]
	      }
	    } else heading += arr[i]
	  }

	  const slug = generateSlug(heading)
	  return <h3 id={slug}>{props.children}</h3>
	}
}

class Article extends React.Component<IArticle, IState> {
  constructor(props: IArticle) {
    super(props);

    this.state = {
      article: '',
      loading: false,
      error: false,
    };

    this.updateArticle();

    this.setArticle = this.setArticle.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setError = this.setError.bind(this);
  }

  async updateArticle() {
    try {
      this.setLoading(true);
      const article_response = await axios.get(this.props.article_url);
      const article_data = await article_response.data;
      if (this.props.table_of_content) {
        const table_of_content = tableOfContents(article_data)
        this.setArticle(table_of_content + "\n---\n" + article_data)
      }
      else {
        this.setArticle(article_data);
      }
    } catch (error) {
      this.setError(true);
    } finally {
      this.setLoading(false);
    }
  }

  componentDidUpdate(prevProps: Readonly<IArticle>, prevState: Readonly<IState>, snapshot?: any): void {
      if(prevProps.article_url !== this.props.article_url) {
        this.updateArticle()
      }
  }

  setArticle(article_data: string) {
    this.setState(() => ({
      article: article_data,
    }));
  }

  setLoading(state: boolean) {
    this.setState(() => ({
      loading: state,
    }));
  }

  setError(state: boolean) {
    this.setState(() => ({
      error: state,
    }));
  }

  render() {
    if (this.state.loading) {
      return <section></section>;
    }

    return (
      <section style={{ width: '65%', textAlign: 'left', marginLeft: 40}}>
        <ReactMarkdown components={MarkdownComponent}>{this.state.article}</ReactMarkdown>
      </section>
    );
  }
}

export default Article;
