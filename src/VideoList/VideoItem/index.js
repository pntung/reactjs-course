import './videoitem.css'
import React, {Component} from 'react'


class VideoItem extends Component {
    render() {
        return(
            <div 
                className='videoitem-view'
            >
                <img 
                    src={this.props.itemvalue.videoImg.url} 
                    alt={this.props.itemvalue.title} 
                    onClick = {() => this.props.onVideoClick(this.props.itemvalue)}
                />
                {this.props.itemvalue.title}
            </div>
        )
    }
}

export default VideoItem;