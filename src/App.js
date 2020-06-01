import './App.css';
import SearchBar from './SearchBar';
import Video from './Video';
import VideoList from './VideoList';

import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.getVideoList = this.getVideoList.bind(this);
    this.state = {
      videolist: [],
      selectedVideo: {
        videoId: '',
        title: '',
        videoImg: '',
        desciption: '',
      }
    };
  }

  getVideoList(items) {
    
    const itemsTemp = items.map(e => {
      return {
        videoId: e.id.videoId,
        title: e.snippet.title,
        videoImg: e.snippet.thumbnails.medium,
        desciption: e.snippet.description,
      }      
    });

    if (itemsTemp.length <= 0) {
      return;
    }

    this.setState({
      videolist: itemsTemp,
      selectedVideo: itemsTemp[0],
    })
    
  }

  getSearchInfo = e => {
    if (e === '') {
      return
    }
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyCbIFGj95IKPzAxOINq8kjDpeTg4bW5EhE&q='+e;
    const that = this;
    axios.get(url)
      .then(function (response){
        let items = response.data.items;
        that.getVideoList(items);
      })
      .catch (function (error){
        console.log(error);
      })
  }

  onItemClick = e => {
    this.setState({
      selectedVideo: e,
    })
  }

  render() {
    return (
      <div>
        <div className='row-header'>
          <div className='col-full'>
            <SearchBar
              onClick = {this.getSearchInfo}
             />
          </div>
        </div>
        <div className='row-body'>
          <div className='collumn left'>
            <Video
              videoinfo = {this.state.selectedVideo}
            />
          </div>
          <div className='collumn right'>
            <VideoList
              valuelist = {this.state.videolist}
              onClick = {this.onItemClick}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
