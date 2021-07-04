// Libraries
import React from 'react';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from '../PlanModal/types';

// Actions
import { EditPlanAction, DeletePlanAction } from '../../Dashboard/duck/Types';

// Components
import BoardItem from './BoardItem';

type BoardItemsProps = {
    username: string;
    items: TravelPlanInfoType[];
    editPlan: (formData: TravelPlanInfoType) => EditPlanAction;
    deletePlan: (userLink: UserPlanLinkType) => DeletePlanAction;
}

export default class BoardItems extends React.PureComponent<BoardItemsProps> {
    
  render() {
    return (
      <div className="boards_wrap">
        <div className="boards">
          {this.props.items.map((item, i) => (
            <BoardItem
              index={i}
              key={item.planID}
              item={item}
              username={this.props.username}
              editPlan={this.props.editPlan}
              deletePlan={this.props.deletePlan}
            />
          ))}
        </div>
      </div>
    );
  }
}