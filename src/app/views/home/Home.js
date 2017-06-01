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
          byTrackPlaces:{
            typeAllowed: ['Track','Disabled','Sedan'],
            places:{
              0: {busy: true, typeCar: 'Track'},
              1: {busy: false, typeCar: undefined},
              2: {busy: false, typeCar: undefined},
              3: {busy: false, typeCar: undefined},
              4: {busy: false, typeCar: undefined},
              5: {busy: false, typeCar: undefined}
            }
          },
          byDisabledPlaces: {
            typeAllowed: ['Disabled'],
            places: {
              0: {busy: true, typeCar: 'Disabled'},
              1: {busy: true, typeCar: 'Disabled'},
              2: {busy: true, typeCar: 'Disabled'},
              3: {busy: false, typeCar: undefined},
              4: {busy: false, typeCar: undefined},
              5: {busy: false, typeCar: undefined}
            }
          },
            bySedanPlaces:{
              typeAllowed: ['Sedan','Disabled'],
              places:{
                0: {busy: true, typeCar: 'Sedan'},
                1: {busy: true, typeCar: 'Sedan'},
                2: {busy: true, typeCar: 'Sedan'},
                3: {busy: false, typeCar: undefined},
                4: {busy: false, typeCar: undefined},
                5: {busy: false, typeCar: undefined}
              }
          }
        }
      ]
    };

    this.testFunc = this.testFunc.bind(this);
  }
  componentWillMount(){
    console.log(this)
  }
  componentDidMount(){
    window.testMethod = this.testFunc;
    console.log(window.testMethod);
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
            return <Parking/>
        } )}
      </div>
    );
  }
}

export default Home;
