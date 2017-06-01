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
      ]
    };

    this.testFunc = this.testFunc.bind(this);
  }
  componentWillMount(){
  }
  componentDidMount(){
    window.testMethod = this.testFunc;
  }
  testFunc (x) {
    console.log(x)
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
                    <Parking name={item.name} typePlaces={item.byTypePlaces} />
                </div>
        } )}
      </div>
    );
  }
}

export default Home;
