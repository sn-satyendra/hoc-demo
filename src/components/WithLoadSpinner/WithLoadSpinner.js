/**
 * HOC for providing the Spinner functionality to any WrappedComponent by watching 
 * a specified prop.
 */

import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import isEmpty from "lodash/isEmpty";
import Spinner from '../Spinner/Spinner';

export default (WrappedComponent, propToWatch) => {
  class Enhanced extends React.Component {
    render() {
      if (isEmpty(this.props[propToWatch])) {
        return <Spinner/>;
      } else {
        // Pass through the all the unmodified props
        // when using WrappedComponent
        return <WrappedComponent {...this.props} />; 
      }
    }
  }

  // Copy all the static methods
  hoistNonReactStatics(Enhanced, WrappedComponent);

  // Add a displayName for easy debugging
  Enhanced.displayName = `WithLoadSpinner(${getDisplayName(WrappedComponent)})`;;
  return Enhanced;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
