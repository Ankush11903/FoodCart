import React,{Fragment} from 'react'
import Image from './meals.jpg';
import classes from'./Header.module.css';
import CardIconButton from './CartIconButton';

export default function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <CardIconButton onClick={props.onShowHandler}/>
    </header>
    <div className={classes['main-image']}>
      <img src={Image} alt="Food Image"/>
    </div>
    </Fragment>
  )
}
