import React from 'react';
import WeatherListItem from './WeatherListItem';

/**
 * Functional Component
 * 
 * All we would have in this component was a render method, so it is a perfect use case for
 * having it as a functional component.
 * 
 * @param {*} props "this" doesnt exist in a functional component, so props are passed in to 
 * the component 
 */
const WeatherList = ({ days, onDayClicked }) => 
    <div className="weather-list flex-parent">
      {days.map((day, index) =>
        <WeatherListItem
          key={day.dt}
          day={day}
          onDayClicked={onDayClicked}
          index={index}
        />
      )}
    </div>;

export default WeatherList;