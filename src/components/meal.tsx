import React from 'react';
import './meal.css'
import placeholderImage from '../assets/loading.gif';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/respimg/ls.respimg.js';
import 'lazysizes';

interface IMeasurement{
  time: string;
  value: number;
}

export interface IMeal{
  time: string;
  image: string;
  noTag: number;
  description: string;
  measurements: Array<IMeasurement>;
}

const toDate = (dStr: string,format:string="h:m") => {
  var now = new Date();
	if (format === "h:m") {
    let delimiter = dStr.indexOf(":");
    let cut = dStr.substr(0,delimiter);
 		now.setHours(+cut);
 		now.setMinutes(+(cut)+1);
     now.setSeconds(0);
 		return now;
	}else 
		return "Invalid Format";
}
const applyMeasurementClass = (measureTimeParam: string, measureValueParam: number) => {
  let spanClass = 'measurement-ok'
  if(measureTimeParam === 'n/a'){
    spanClass = ''
  }
  else{
    let measureTime = toDate(measureTimeParam,"h:m");
    let measureValue = +measureValueParam;
    if (measureTime < toDate('07:00','h:m') && measureValue > 90){
      spanClass = 'measurement-high';
    }
    if (measureTime >= toDate('07:00','h:m') && measureValue > 140){
      spanClass = 'measurement-high';
    }
  }
  return spanClass;  
}

const emptyStomachCutoff = toDate('07:00','h:m');
const breakfastCutoff = toDate('10:00','h:m');
const dinnerCutoff = toDate('18:00','h:m');
const supperCutoff = toDate('21:00','h:m');

const getMealTag = (mealTime: string, measurements: Array<IMeasurement>, noTag: number) => {
  let tag = '';
  if (measurements.length && !noTag){
    const when = toDate(mealTime,"h:m")
    switch (true){
      case when < emptyStomachCutoff:
        tag = 'EMPTY STOMACH';
        break;
      case when >= emptyStomachCutoff && when < breakfastCutoff:
        tag = 'BREAKFAST';
        break;
      case when >= breakfastCutoff && when < dinnerCutoff:
        tag = 'DINNER';
        break;
      case when >= dinnerCutoff && when < supperCutoff:
        tag = 'SUPPER';
        break;
      default:
        break;
    }
  }

  return tag;
}

const Meal: React.SFC<IMeal> = (props) => {
  return (
    <div className="mealCard">
     <p>Meal started at: {props.time} <span className='measurement-tag'>{getMealTag(props.time, props.measurements, props.noTag)}</span></p>
     <div>
       <img className="lazyload mealImg" src={placeholderImage} data-src={props.image} alt={props.image} />
     </div>
     <p>Content: {props.description}</p>
     <ul>
      {
        !(props.measurements.length) ? '' :
          props.measurements.map( (measure: IMeasurement, i: number) => {
            let spanClass = applyMeasurementClass(measure.time, measure.value);
            return (
              <li key={i}>{measure.time}: <span className={spanClass}>{measure.value} mg/dL</span></li>
            );
          })
      }
     </ul>
    </div>
  );
}

export default Meal;