/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

interface IApplicationProps {
}

interface IApplicationState {
}

class App extends React.Component<IApplicationProps, IApplicationState> {
    constructor(props: IApplicationProps) {
        super(props);
    }
    render() {
        return (
            <div>Hello, there!</div>
        )
    }
}

function mapStateToProps(state): IApplicationProps {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch): IApplicationProps {
  return {
      actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
