import React, { Component } from 'react';
import List from './childCpns/List'
import Topic from './childCpns/Topic'
import Recommend from './childCpns/Recommend'
import Writer from './childCpns/Writer'

import { connect } from 'react-redux'
import { actionCreators } from './store'

import {
   HomeWrapper,
   HomeLeft,
   HomeRight,
   BackTop
 } from './style'

class Home extends Component {

  componentDidMount() {
    this.props.changeHomeData()
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-img'
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        <BackTop></BackTop>
      </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null, mapDispatch)(Home);