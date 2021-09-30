import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">All props are validated</h4>
                </div>
                <div className="card-body">
                    <p>Array: {this.props.propArray}</p>
                    <p>Bool: {this.props.propBool ? 'true' : 'false'}</p>
                    <p>Function: {this.props.propFunc('foo')}</p>
                    <p>Number: {this.props.propNumber}</p>
                    <p>String: {this.props.propString}</p>
                </div>
            </div>
        )
    }
}

export default Main;