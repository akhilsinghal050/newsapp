import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles =  [
      {
        "source": {
          "id": "news-com-au",
          "name": "News.com.au"
        },
        "author": "Ben Talintyre",
        "title": "Lyon wipes Shane Warne from history books",
        "description": "Nathan Lyon has officially the most wickets of any Australian cricketer against Sri Lanka in Sri Lanka, surpassing the late-great Shane Warne’s record as Australia continue to dominate the hosts in the first Test.",
        "url": "https://www.news.com.au/sport/cricket/nathan-lyon-surpasses-longstanding-shane-warne-record-as-sri-lanka-fall-apart-in-first-test/news-story/a71efcbc8180633ffed3986d9d9dc6a1",
        "urlToImage": "https://content.api.news/v3/images/bin/6b052727c07fd6282836c5009eea6c73",
        "publishedAt": "2025-02-01T06:39:00Z",
        "content": "Nathan Lyon has officially the most wickets of any Australian cricketer against Sri Lanka in Sri Lanka, surpassing the late-great Shane Warne’s record as Australia continue to dominate the hosts in t… [+2773 chars]"
      },
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "Women’s Ashes 2025 LIVE: Australia vs England Test, day three - cricket score, radio & highlights",
        "description": "England face Australia in day three of the Test in the Women’s Ashes – follow score updates, radio commentary and video highlights.",
        "url": "http://www.bbc.co.uk/sport/cricket/live/cy53xy4qeg9t",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        "publishedAt": "2025-02-01T03:22:20.6367807Z",
        "content": "Day three of this one-off Ashes Test is upon us - and there is every chance it could be the last of the series.\r\nAustralia have dominated from the start at the MCG and will resume this morning on 422… [+251 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ];


  constructor(){
    super()
    console.log("I am a constructor from news component...")
    this.state={
      articles : this.articles,
      loading : false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News-Monkey - Top headlines</h2>
        {this.state.articles.map((element)=>{})}
        <div className='row'>
          <div className='col-md-4'>
          <NewsItem title="mytitle" description="mydescription" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
