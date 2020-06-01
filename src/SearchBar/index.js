import './searchbar.css'
import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.stuffname = React.createRef();
        this.onButtonCliked = this.onButtonCliked.bind(this);
        
    }

    onButtonCliked(e) {
        e.preventDefault();
        this.props.onClick(this.stuffname.current.value);
    }

    render() {
        return (
            <div className='bar'>
                <input type='text' className='textbar' ref={this.stuffname} />
                <button 
                    className='btt-submit'
                    onClick = {this.onButtonCliked}>
                    Go
                </button>
            </div>
        )
    }
}

export default SearchBar;