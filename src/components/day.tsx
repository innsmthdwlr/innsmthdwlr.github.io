import React from 'react';
import Meal from './meal';
import './meal.css'
import {IMeal} from './meal';


export interface IDay
{
  "date": string; 
  "meals": { 
    "time": string; 
    "image": string; 
    "description": string; 
    "noTag": number;
    "measurements": { 
      "time": string; 
      "value": number; 
    }[]; 
  }[]; 
}

const Day: React.SFC<IDay> = (props) => {
    const diff = (new Date(props.date)).getTime() - (new Date('2019-05-19')).getTime();
    const week = Math.ceil(diff / (1000 * 3600 * 24) / 7)

    return (
        <div className="dayCard">
            <p>
                <strong>{props.date}</strong> {week}<sup>th</sup> week of pregnancy
            </p>
            <div>
                {
                    props.meals.map( (meal:IMeal, i: number) => {
                        return (
                            <Meal time={meal.time} image={meal.image} noTag={meal.noTag} description={meal.description} measurements={meal.measurements} />
                        );
                    })                
                }
            </div>
        </div>
    );
}

export default Day;