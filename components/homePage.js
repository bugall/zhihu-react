import React from 'react';
import { Link } from 'react-router';
import commonCss from './common.css';
import styles from './homePage.css';
import cx from 'classnames';
import TipsProjectCard from './common/tips/project/tips.js'

const Title=React.createClass({
    getInitialState:function(){
        return {}
    },
    render:function(){
        return(
            <div className={styles['title']}>
                <span className={styles['left']}>
                    <i className={styles['icon']}></i>
                    最新动态
                </span>
                
                <span className={styles['right']}>
                    <a className={styles['link']}>
                        <i className={styles['icon']}></i>
                        设置
                    </a>
                </span>
            </div>
        )
    }
})

const BottomAction=React.createClass({
    render: function() {
        return (
            <div className={styles['bottom-action']}>
                <span><i></i>关注问题</span>
                <span><i></i>关注问题</span>
            </div>
        )
    }
})
const ArticleSign=React.createClass({
    getInitialState:function(){
        return{
            tipsShow:false
        }
    },
    handleProjectHover:function(){
        this.setState({
            tipsShow:true
        })
    },
    handleProjectOut:function(){
        this.setState({
            tipsShow:false
        })
    },
    render:function(){
        return(
            <div className={styles['article-wrap']}>
                <div className={styles['left']}>
                    <div className={styles['avatar']}>
                        <img src="http://7xpw4q.com2.z0.glb.qiniucdn.com/1/background8.jpg"></img>
                    </div>
                    <div className={styles['label']}>
                        <span className={commonCss['number-label']}>15k</span>
                    </div>
                </div>
                <div className={styles['right']}>
                    <div className={styles['author']}>
                        <span>热门回答，来自</span>
                        <div className={styles['project-wrap']} onMouseLeave={this.handleProjectOut} onMouseEnter={this.handleProjectHover}>
                            <a className={styles['project']} >恋爱</a>
                            
                            <TipsProjectCard isShow={this.state.tipsShow}/>
                        </div>
                        <a className={styles['action']}>关注话题</a>
                    </div>
                    <div>
                        <a className={styles['article-title']}>支付宝怎样利用沉淀的资金？</a>
                    </div>
                    <div className={styles['content']}>
                    </div>
                    <BottomAction/>
                </div>
            </div>
        )
    }
})
const HomePage=React.createClass({
    getInitialState:function(){
        return {}
    },
    render:function(){
        return(
            <div className={styles.wrap}>
                <Title/>
                <ArticleSign/>
            </div>
        )
    }
})

export default HomePage;