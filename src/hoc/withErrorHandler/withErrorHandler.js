import React, { Component } from 'react';

import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }


    componentDidMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })

      this.resInterceptors = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })
    }

    componentWillUnmount() {
      console.log('Will Unmount', this.reqInterceptors,this.resInterceptors )
      axios.interceptors.request.eject(this.reqInterceptors)
      axios.interceptors.response.eject(this.resInterceptors)
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closeModal={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
};

export default withErrorHandler;