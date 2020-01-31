import React from 'react';
import ErrorView from './ErrorView';
import { withRouter } from 'react-router';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState(() => {
      return {
        hasError: true,
        error,
        info
      };
    });
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return this.state.hasError ? (
      <ErrorView error={this.state.error} info={this.state.info} />
    ) : (
      this.props.children
    );
  }
}

export default withRouter(ErrorBoundary);
