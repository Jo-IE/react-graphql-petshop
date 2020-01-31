import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from '../Buttons/MainButton';

class ErrorView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            {this.props.error != null ? (
              <React.Fragment>
                <h1 className="display-3">500</h1>
                <h1>error</h1>
                <h2>something went wrong</h2>
                <p>
                  <button
                    className="btn btn-primary my-5 mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#viewerror"
                    aria-expanded="false"
                    aria-controls="viewerror"
                  >
                    View Error
                  </button>
                  <button
                    className="btn btn-primary my-5 mx-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#viewstacktrace"
                    aria-expanded="false"
                    aria-controls="viewstacktrace"
                  >
                    View Stack Trace
                  </button>
                </p>
                <div className="row">
                  <div className="col">
                    <div className="collapse multi-collapse" id="viewerror">
                      <div className="card card-body">
                        {this.props.error.toString()}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="collapse multi-collapse"
                      id="viewstacktrace"
                    >
                      <div className="card card-body">
                        {this.props.info.componentStack}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1 className="display-3">404</h1>
                <h1>error</h1>
                <h2>page not found</h2>
                <Link to="/">
                  <MainButton className="my-5">go back home</MainButton>
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorView;
