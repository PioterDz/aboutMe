import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NoMatch extends React.Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="NoMatch">
                <p>Error 404</p>
                <FontAwesomeIcon icon="arrow-alt-circle-left" onClick={this.goBack} />
            </div>
    
        );
    }
}

export default NoMatch;