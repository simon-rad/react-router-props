# react-router-props
React router prop-types.
Shapes for location, history and match, they are provided with `withRouter` enhancer.

# Usage example

```
import React from 'react';
import { withRouter } from 'react-router';
import { locationShape, historyShape, matchShape } from 'react-router-props';

class UsersScreen extends React.Component {

  static propTypes = {
    location: locationShape.isRequired,
    history: historyShape.isRequired,
    match: matchShape.isRequired,
  };

  componentDidMount() {
    console.log(this.props.location.pathname);
    console.log(this.props.match.isExact);
  }

  handleClick = () => this.props.history.push('/');

  render() {
    return <button onClick={this.handleClick} >User</button>;
  }
}

export default withRouter(UsersScreen);

```
