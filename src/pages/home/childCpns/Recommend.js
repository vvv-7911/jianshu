import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem} from '../style'

class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <RecommendWrapper key={item.get('id')}>
                <RecommendItem imgUrl={item.get('imgUrl')}>
                </RecommendItem>
              </RecommendWrapper>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);