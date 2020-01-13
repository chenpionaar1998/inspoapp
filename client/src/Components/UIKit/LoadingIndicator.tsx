import React from 'react';

export default class LoadingIndicator extends React.PureComponent {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <div className="loader_container">
                    <div className="loading_indicator"/>
                </div>
                <span>
                    Fetching your plans from the database...
                </span>
            </div>
        )
    }
}