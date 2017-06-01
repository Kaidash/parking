/**
 * Created by Admin on 01.06.2017.
 */
import React from 'react';
import {TypeParking}    from '../../components';
import './parking.scss'
export class Parking extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='parking-container' style={{backgroundColor:`#${((1<<24)*Math.random()|0).toString(16)}`}}>
               <h4 className='parking-name'>{this.props.name}</h4>
                <div className="type-box">
                    {this.props.typePlaces.map((placeItem, placeIndex) => {
                        return <div className="type-style-container" key={`${this.props.name}_${placeIndex}`}>
                            <TypeParking typeParkingData={placeItem} />
                        </div>
                    })}
                </div>
            </div>
        );
    }
};

export default Parking;