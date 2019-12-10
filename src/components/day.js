import React from 'react';
import Meal from './meal';
import './meal.css'

const Day = ({ day }) => {
  return (
    <div className="dayCard">
        <p>
            <strong>{day.date}</strong>
        </p>
        <div>
            {
                day.meals.map( (meal, i) => {
                    return (
                        <Meal meal={meal} key={i} />
                    );
                })                
            }
        </div>
    </div>
  );
}

export default Day;