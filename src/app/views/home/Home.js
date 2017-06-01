// @flow weak

import React, {
  PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import {Parking}    from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router';

class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      parkingPlaces:[
        {
          name: 'A',
          byTypePlaces:[{
            typeName:'Track',
            typeAllowed: ['Track', 'Disabled', 'Sedan'],
            places: [
              {busy: true, typeCar: 'Track'},
              {busy: false, typeCar: undefined},
              {busy: false, typeCar: undefined},
              {busy: false, typeCar: undefined},
              {busy: false, typeCar: undefined},
              {busy: false, typeCar: undefined}
            ]
          },
            {
              typeName: 'Disabled',
              typeAllowed: ['Disabled'],
              places: [
                {busy: true, typeCar: 'Disabled'},
                {busy: true, typeCar: 'Disabled'},
                {busy: true, typeCar: 'Disabled'},
                {busy: false, typeCar: undefined},
                {busy: false, typeCar: undefined},
                {busy: false, typeCar: undefined}
              ]
            },
            {
              typeName: 'Sedan',
              typeAllowed: ['Sedan', 'Disabled'],
              places: [
                {busy: true, typeCar: 'Sedan'},
                {busy: true, typeCar: 'Sedan'},
                {busy: true, typeCar: 'Sedan'},
                {busy: false, typeCar: undefined},
                {busy: false, typeCar: undefined},
                {busy: false, typeCar: undefined}
              ]
            }
          ]
        }
      ],
      counter: true
    };

    this.getFreePlaces = this.getFreePlaces.bind(this);
    this.newCar = this.newCar.bind(this);
  }
  componentWillMount(){
  }
  componentDidMount(){
    console.log('unmount');
    window.getFreePlaces = this.getFreePlaces;
    window.newCar = this.newCar;
  }
  getFreePlaces () {
    let freeplacesCount = 0;
  }
  newCar (parkingName, typeCar){
    const parkingNameToLower = parkingName.toString().toLowerCase();
    const typeCarToLower = typeCar.toString().toLowerCase();
    let parkingStatus = false;
    //find parking
    this.state.parkingPlaces.forEach((parkingItem) => {
          if (parkingNameToLower === parkingItem.name.toString().toLowerCase()) {
            //find parking place for typeCar
            parkingItem.byTypePlaces.forEach((typeCarItem) => {
              //find carType in allowed types for this parking name
              typeCarItem.typeAllowed.forEach((allowedItem) => {
                if(typeCarToLower === allowedItem.toString().toLowerCase()){
                  for(let place of typeCarItem.places) {
                      if (!place.busy && !place.typeCar && !parkingStatus) {
                        parkingStatus = true;
                        place.busy = true;
                        place.typeCar = typeCar;
                        break;
                      }
                    }
                }
              })
            })
          }
        }
    );
    if (!parkingStatus) {
      console.error("There aren't empty seats on the parking")
    }
    this.setState({counter: !this.state.counter});
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        {this.state.parkingPlaces.map((item, index) =>{
            return <div key={index}>
              {this.state.test}
                    <Parking name={item.name} typePlaces={item.byTypePlaces} />
                </div>
        } )}
      </div>
    );
  }
}

export default Home;
