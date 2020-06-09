import React from 'react';

export default class BoardsLoadingIndicator extends React.PureComponent {
    render() {
        return (
            // https://loading.io/css/
            <div className="boardItemLoadingWrapper">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}