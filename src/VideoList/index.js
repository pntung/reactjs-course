import './videolist.css'
import VideoItem from './VideoItem'
import React, {Component} from 'react'

class VideoList extends Component {

    showVideos = () => {
        console.log("video list",this.props.valuelist)
        const itemlist =  this.props.valuelist.map(e => {
            return(
                <VideoItem 
                    key={e.videoId} 
                    itemvalue={e}
                    onVideoClick = {this.props.onClick} 
                /> 
            )
        });
        
        return itemlist;
    }

    render() {
        return (
            <div className='videolist'>
                
                {this.showVideos()}
                
            </div>
        )
    }
}

export default VideoList;