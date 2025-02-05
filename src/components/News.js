import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super()
    console.log("I am a constructor from news component...")
    this.state={
      articles : this.articles,
      loading : false
    }
  }


 async componentDidMount(){

    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=a0135530bea146cbb05d7559085f41f1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})

  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News-Monkey - Top headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,48):""} description={element.description?element.description.slice(0,48):""}
               imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News
