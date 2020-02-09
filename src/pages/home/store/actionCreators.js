import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

const getHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})

const addHomeList = (list) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = getHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      console.log(res)
      const list = res.data.data
      dispatch(addHomeList(list))
    })
  }
}