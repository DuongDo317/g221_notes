import React, { Component } from 'react'
import View from './View'

export default class DummyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'foo',
      bar: 'bar'
    }
  }

  render() {
    return <View {...this.props} />
  }
}
