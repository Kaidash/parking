/**
 * Created by Admin on 01.06.2017.
 */
import React from 'react';
import {Place}    from '../../components';
import './typeParking.scss'
export class TypeParking extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props.typeParkingData);
    }

    render () {
        return (
            <div className='type-parking-container'>
                <h5>{this.props.typeParkingData.typeName}'s</h5>
               <div className="type-flex-container">
                   { this.props.typeParkingData.places.map((placeItem, placeIndex)=>{
                       return  <div className="place-item" key={`${this.props.typeParkingData.typeName}_${placeIndex}`}>
                           <Place place={placeItem} />
                       </div>

                   })}
               </div>
            </div>
        );
    }
};

export default TypeParking;