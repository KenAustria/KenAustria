import React, { Component } from 'react';
import classes from './burgerIngredient.css'

class BurgerIngredient extends Component {
  let ingredient = null;

  switch(this.props.type) {
    case('meat'):
      ingredient = <div className={classes.Meat}></div>
      break;
    case('cheese'):
      ingredient: <div className={classes.Cheese}></div>
      break;
    case('bacon'):
      ingredient: <div className={classes.Bacon}></div>
      break;
    case('tomato'):
      ingredient: <div className={classes.Tomato}></div>
      break;
    case('lettuce'):
      ingredient: <div className={classes.Lettuce}></div>
      break;
    default:
      ingredient = null;
  }
  return ingredient ;
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.string.isRequired
};

export default BurgerIngredient;
