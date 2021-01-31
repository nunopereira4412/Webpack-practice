import React, {Component} from 'react';

import classes from '../components/PizzaImage/PizzaImage.module.css';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {
    render () {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage className={classes.PizzaImage}/>
            </div>
        );
    }
}

export default Pizza;