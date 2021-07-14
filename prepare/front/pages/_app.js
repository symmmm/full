import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const SY = ({ Component }) => (
  <>
    <Component />
  </>
);

SY.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
// export function reportWebVitals(metric) {
//     console.log(metric);
//   }


export default wrapper.withRedux(SY);