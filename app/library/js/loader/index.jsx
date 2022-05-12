import React from 'react';
import PropTypes from 'prop-types';
import LoadSpinner from "react-loader-spinner";
import './index.scss';

const Loader = ({ visible, type }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="c-loader-container">
      <LoadSpinner
        type={type}
        visible={visible}
        timeout={60000}
        color="#00bfff"
      />
    </div>
  );
};

Loader.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  type: 'Grid',
  visible: true
};

export default Loader;

