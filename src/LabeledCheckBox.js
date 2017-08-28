/**
 * Created by vanny on 18.08.2017.
 */
import React from 'react';

export default class LabeledCheckBox extends React.Component {

    render(){
        const {labelText} = this.props;
        return(
            <div>
                <label >{labelText}</label>
                <input id="checkbox" type="checkbox"/>
            </div>
        )
    }

}