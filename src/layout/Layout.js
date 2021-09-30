import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/Main';

class Layout extends React.Component {
    render() {
        return (
          <div>
            <Main />
          </div>
        );
    }
}

Main.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propfunc: PropTypes.func.isRequired,
    propNumber: PropTypes.number.isRequired,
    propString: PropTypes.string.isRequired
};

Main.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: false,
    propFunc: function (e) { return e; },
    propNumber: 897,
    propString: 'Hola, mundo!'
};

export default Layout;