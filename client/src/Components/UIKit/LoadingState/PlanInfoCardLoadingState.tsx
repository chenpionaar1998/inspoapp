import React from 'react';

export default class PlanInfoLoadingState extends React.PureComponent {
    render() {
        return (
            <div className="profile_information">
                <div className="profile_avatar_holder_loading"/>
                <div className="profile_data">
                    <p className="profile_name_loading"/>
                    <p className="profile_date_loading"/>
                </div>
            </div>
        )
    }
}