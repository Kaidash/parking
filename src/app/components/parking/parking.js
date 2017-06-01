/**
 * Created by Admin on 01.06.2017.
 */
import React from 'react';
import {TypeParking}    from '../../components';

export class Parking extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='parking-container'>
               <h4 className='parking-name'>{this.props.name}</h4>
                {this.props.typePlaces.map((placeItem, placeIndex) => {
                    return <div key={`${this.props.name}_${placeIndex}`}>
                            <TypeParking typeParkingData={placeItem} />
                        </div>
                })}
            </div>
        );
    }
};

export default Parking;