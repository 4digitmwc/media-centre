import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

interface IArticle {
  article_url: string;
}

interface IState {
  article: string;
  loading: boolean;
  error: boolean;
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
      this.setArticle(article_data);
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
      <section style={{ width: '50%', textAlign: 'left', marginLeft: 40 }}>
        <ReactMarkdown>{this.state.article}</ReactMarkdown>
      </section>
    );
  }
}

export default Article;
