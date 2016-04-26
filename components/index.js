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

var Students = React.createClass({
    getInitialState: function() {
      return {
        students: ['amy', 'bob', 'tom', 'lucy']
      };
    },
    componentDidMount: function() {
      var self = this;
      var update = function() {
        self.setState({
          students: self.state.students.concat(["unamed-"+parseInt(Math.random()*10000000)])
        });
      }
      setInterval(update, 1000);
    },
    handleRemove: function(e) {
      var name = $(e.target).data("name");
      var index = 0;
      var students = this.state.students;
      for(var i=0;i<students.length;i++) {
        if(students[i] == name) index = i;
      }
      var state = this.state.students.splice(index, 1);
      this.setState({
        state: state
      });
    },
    render: function() {
      var s = this.state.students;
      var self = this;
      return (
        <div>
        <ReactCSSTransitionGroup transitionName="student">
        {
           s.map(function(d, i) {
             return <div className='student' key={d}>{d} <a onClick={self.handleRemove} data-name={d}>删除</a></div>
           })

        }
        </ReactCSSTransitionGroup>
        </div>
        );
    }
  });

export default App;

//  <ul>
//                     <li><Link to="/">Home Page</Link></li>
//                     <li><Link to="ca">get component A</Link></li>
//                     <li><Link to="cb">get component B</Link></li>
//                 </ul>
//                 <hr/>