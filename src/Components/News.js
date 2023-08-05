import React, { Component } from 'react'
import NewsItem from './newsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "I stayed quiet but that ends today - Ramsdale",
      "description": "Arsenal goalkeeper Aaron Ramsdale says he wants football to be \"welcoming for everyone\", allowing his brother, who is gay, to attend matches without fear of abuse.",
      "url": "http://www.bbc.co.uk/sport/football/66394989",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7605/production/_130631203_gettyimages-1494088701.jpg",
      "publishedAt": "2023-08-03T14:07:35.4990418Z",
      "content": "Aaron Ramsdale was attacked by a Tottenham supporter at the end of January's north London derby\r\nArsenal goalkeeper Aaron Ramsdale says he will no longer stay quiet when he encounters homophobic comm… [+2667 chars]"
    },
    {
      "source": { "id": "four-four-two", "name": "FourFourTwo" },
      "author": "Ryan Dabbs, Chris Evans",
      "title": "‘A sad day’: Former Luton Town manager Mick Harford recalls the day the club were deducted a massive 30 points in League Two",
      "description": "Only 14 years ago, Luton Town were dropping out of the Football League. Now, they're preparing for life in the Premier League",
      "url": "https://www.fourfourtwo.com/news/a-sad-day-former-luton-town-manager-mick-harford-recalls-the-day-the-club-were-deducted-a-massive-30-points-in-league-two",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/bJECxunPhV9cLEuRhWfKED-1200-80.jpg",
      "publishedAt": "2023-08-03T13:00:13Z",
      "content": "Luton Town and their rise from the Conference to the Premier League in just 14 years is one of football's most incredible stories, and it all started with a 30-point deduction when they were in Leagu… [+2919 chars]"
    },
    {
      "source": { "id": "talksport", "name": "TalkSport" },
      "author": "161385360554578",
      "title": "New club in Caicedo race, Jesus to miss start of season, Nkunku injury, Gvardiol to City",
      "description": "talkSPORT.com brings you all the latest football news, insight and transfer gossip. Check out the headline stories and follow our live blog below for regular updates throughout the day. Headlines: …",
      "url": "https://talksport.com/football/1486182/football-news-live-harry-kane-tottenham-man-utd-rasmus-hojlund/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/08/OQ-TALKSPORT-BLOG-3RD-AUG.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      "publishedAt": "2023-08-03T07:20:04Z",
      "content": "The Tottenham Hotspur Supporters’ Trust has warned the club they will drive away fans and create a ‘passionless stadium’ if they continue with their matchday ticket price increase.\r\nPlans for Spurs t… [+1811 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "The 10 most dominant schools in both football and basketball over the past decade",
      "description": "It's hard to build an athletic program that can dominate both on the hardwood and on the gridiron. Here are 10 schools that have done it best.",
      "url": "http://www.foxsports.com/stories/college-football/the-10-most-dominant-schools-in-both-football-and-basketball-over-the-past-decade",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.01.23_CFB-CBB-Schools_Horizontal.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-02T21:57:50Z",
      "content": "Big 12\r\n commissioner Brett Yormark recently joined FOX Sports college football analyst Joel Klatt on his podcast, \"The Joel Klatt Show: Big Noon Conversations,\" to discuss the current state of colle… [+16124 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": "Alex Kay",
      "title": "2023 Fantasy Football Draft Strategy Based on 9 Lessons Learned from 2022 Season",
      "description": "With the start of the 2023 NFL campaign just over a month away, fantasy football draft season is finally upon us. It's one of the most exciting times of the…",
      "url": "https://bleacherreport.com/articles/10084828-2023-fantasy-football-draft-strategy-based-on-9-lessons-learned-from-2022-season",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1690922268/mtrobfbkkzlolvypckdh.jpg",
      "publishedAt": "2023-08-02T11:00:00Z",
      "content": "Michael Owens/Getty Images\r\nConventional fantasy wisdom used to guide most managers toward an RB1 with their first pick. With most NFL teams taking platoon-based approaches to their backfield, couple… [+1458 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]

  constructor()
  {
    super();
    console.log("constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
    <div className='container my-3'>
        <h1>Top Headlines of the Day</h1>
        <div className="row">
            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription" imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7605/production/_130631203_gettyimages-1494088701.jpg" newsUrl="to do"/>
            </div>

            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription"/>
            </div>

            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription"/>
            </div>         
        </div>
    </div>
    )
  }
}

export default News