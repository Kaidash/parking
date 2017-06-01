/**
 * Created by Admin on 01.06.2017.
 */
import React from 'react';
import {Place}    from '../../components';

export class TypeParking extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props.typeParkingData);
    }

    render () {
        return (
            <div className='type-parking-container'>
                <h5>{this.props.typeParkingData.typeName}</h5>
                { this.props.typeParkingData.places.map((placeItem, placeIndex)=>{
                    return  <div key={`${this.props.typeParkingData.typeName}_${placeIndex}`}>
                        <Place place={placeItem} />
                    </div>

                })}
            </div>
        );
    }
};

export default TypeParking;