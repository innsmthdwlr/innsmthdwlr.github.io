import React from 'react';
import './meal.css'

const toDate = (dStr,format="h:m") => {
  var now = new Date();
	if (format === "h:m") {
 		now.setHours(dStr.substr(0,dStr.indexOf(":")));
 		now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
     now.setSeconds(0);
 		return now;
	}else 
		return "Invalid Format";
}
const applyMeasurementClass = (measureTimeParam, measureValueParam) => {
  let spanClass = 'measurement-ok'
  if(measureTimeParam === 'n/a'){
    spanClass = ''
  }
  else{
    let measureTime = toDate(measureTimeParam,"h:m");
    let measureValue = measureValueParam;
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

const getMealTag = (mealTime, measurements, noTag) => {
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

const Meal = ({ meal }) => {
  // let a = toDate("16:10");
  // let b = toDate("14:40");
  // console.log((a.getTime() - b.getTime())/ (1000 * 3600));
  return (
    <div className="mealCard">
     <p>Meal started at: {meal.time} <span className='measurement-tag'>{getMealTag(meal.time, meal.measurements, meal.noTag)}</span></p>
     <p><img className="mealImg" src={process.env.PUBLIC_URL + '/meals/' + meal.image} alt={meal.image} /></p>
     <p>Content: {meal.description}</p>
     <ul>
      {
        !(meal.measurements.length) ? '' :
          meal.measurements.map( (measure, i) => {
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