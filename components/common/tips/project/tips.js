import React from 'react';
import { Link } from 'react-router';
import styles from './tips.css';

const TipsProjectCard = React.createClass({
    render: function() {
        if(this.props.isShow){
            return (
                    <div className={styles['tips-wrap']}>
                        <span className={styles['triangle-up']}></span>
                        <div className={styles['tips-content']}>
                            <div className={styles['up']}>
                                
                            </div>
                            <div className={styles['down']}>
                            </div>
                        </div>
                    </div>
            )
        }else{
            return (
                <span></span>        
            )
        }
    }
})

export default TipsProjectCard;

// 
                    
//                 