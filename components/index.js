import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';
import Navigation from './navigation';
import HomePage from './homePage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var App = React.createClass({
    componentDidMount:function(){
        console.log(3333);
    },
    render:function(){    
        return (
            <div>
                <Navigation/>
                <div className={styles['main-wrap']}>
                    <HomePage/>
                </div>
            </div>
        );
    }
})
export default App;

//  <ul>
//                     <li><Link to="/">Home Page</Link></li>
//                     <li><Link to="ca">get component A</Link></li>
//                     <li><Link to="cb">get component B</Link></li>
//                 </ul>
//                 <hr/>