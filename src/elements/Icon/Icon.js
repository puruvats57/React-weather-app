import React from 'react';

import classes from './Icon.module.css';

const icon = (props) =>{
    let imgSrc=require(`../../assets/images/${props.type}.svg`)?require(`../../assets/images/${props.type}.svg`):require(`../../assets/images/Clear.svg`)
    return (
        <img 
            src={imgSrc}
            alt={props.type}
            className={classes.Icon} />
    );
}

export default icon;