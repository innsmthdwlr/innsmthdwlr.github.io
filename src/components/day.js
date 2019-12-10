import React from 'react';
import Meal from './meal';
import './meal.css'

const Day = ({ day }) => {
    const diff = (new Date(day.date)).getTime() - (new Date('2019-05-19')).getTime();
    const week = Math.ceil(diff / (1000 * 3600 * 24) / 7)

    return (
        <div className="dayCard">
            <p>
                <strong>{day.date}</strong> {week}<sup>th</sup> week of pregnancy
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