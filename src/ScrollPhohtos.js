/**
 * Created by vanny on 18.08.2017.
 */

import React from 'react';

export default class ScrollPhotos extends React.Component{


    render(){
        const {images} = this.props;
        const i = this.props.img;

        return (
            <div>
                <input type="button" onClick={this.props.scrollPrevious} value="Previous"/>
                <img className="image" src={images[i]}/>
                <input type="button" onClick={this.props.scrollNext} value="Next"/>
            </div>

        )
    }
}