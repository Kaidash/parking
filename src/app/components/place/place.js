/**
 * Created by Admin on 01.06.2017.
 */
import React from 'react';

export class Place extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='place-container'>
                <span>-------------------------</span>
                <span>{this.props.place.busy}</span>
                <span>{this.props.index}</span>
                <span>{this.props.place.typeCar}</span>
                <span>-------------------------</span>
            </div>
        );
    }
};

export default Place;
