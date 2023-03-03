/* eslint-disable no-undef */
/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
   static defaultProps= {
     country : 'in',
     pageSize: 7,
     category: 'gernal',
   }

   static PropsTypes = {
     country : PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string,
   }

  constructor(){
    super();
    console.log("hello i am lalit this code for free use")
    this.state = {
      articles :[],
      loading:true,
      page:1,
      
    }
  }

   async  componentDidMount(){  
    // eslint-disable-next-line no-template-curly-in-string
      // let url = 'https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3681b88d7ab4838957964b2d52cf6f4&page=1&pageSize=${this.props.pageSize}';

      let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3681b88d7ab4838957964b2d52cf6f4';
     this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
       totalResults: parsedData.totalResults,
      loading: false })

  }

  handlePrevClick= async()=>{
    console.log("previous")
      // eslint-disable-next-line no-template-curly-in-string
      let url = 'https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3681b88d7ab4838957964b2d52cf6f4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}';
      this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
     this.setState({
    page: this.state.page - 1,
    articles:parseddata.articles,
    loading: false
  })


  }
 handleNextClick=async ()=>{
  console.log("Next");
  if( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{

    //  eslint-disable-next-line no-template-curly-in-string
    let url = 'https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3681b88d7ab4838957964b2d52cf6f4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}';
  this.setState({loading: true});
  let data = await fetch(url);
  let parseddata = await data.json()
  // console.log(parseddata);
    this.setState({
  page: this.state.page + 1,
  articles:parseddata.articles,
  loading: false
})
 }
 
  }

  render() {
    return (
      <>
      <div className="container my-3">
      <h1 className="text-center">G1INDIA - A NEWS API WEBSITE</h1>
      <div className="row">
      {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0, 88 ):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
      })}
      </div>
      </div>
      <div className="container d-flex justify-content-between my-3 mx-3">
       <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>
      </>
    )
  }
}

export default News