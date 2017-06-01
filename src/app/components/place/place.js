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
                {!!this.props.place.busy ?
                    <div>
                        <span>{this.props.place.busy}</span>
                        <span>{this.props.index}</span>
                        <span>{this.props.place.typeCar}</span>
                    </div> : 'free place'  }

            </div>
        );
    }
};

export default Place;
