import './video.css';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        let videolink = 'https://www.youtube.com/watch?v=' + this.props.videoinfo.videoId;
        console.log(videolink);
        return (
            <div className='video-view'>
                <div className='video-play'>
                    <ReactPlayer url={videolink} controls width='100%' height='100%' />
                </div>

                <div className='video-info'>
                    {this.props.videoinfo.desciption}
                </div>
            </div>
        )
    }
}

export default Video;