###  项目问题

1.  header头部推荐数据请求时出现错误
   - 问题 :  推荐数据从axios请求下来时是存放在header的reducer中的list里面,   又因为reducer使用了immutable,  所以list是一个immutable的数组.    而从axios请求下来的数据是一个普通的数组,  直接通过 dispatch(action) 派发给了reducer,    所以    当reducer中调用set方法修改list时,  list会由普通的数组变为immutable数组,  所以会出现错误.
   - 解决办法 :  在actionCreators 在定义action时 把action中的data用fromJS包裹一下,让它变成immutable数据类型,  然后在通过 dispatch(action)  派发给reducer