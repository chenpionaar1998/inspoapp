// Libraries
import React from 'react';

// Types
import { TravelPlanInfoType } from '../PlanModal/types';

// Actions
import { EditPlanAction } from '../../Dashboard/duck/Types';

// Components
import BoardItem from './BoardItem';

type BoardItemsProps = {
    username: string;
    items: TravelPlanInfoType[];
    editPlan: (formData: TravelPlanInfoType) => EditPlanAction;
}

export default class BoardItems extends React.PureComponent<BoardItemsProps> {
    
  render() {
    return (
      <div className="boards_wrap">
        <div className="boards">
          {this.props.items.map((item, i) => (
            <BoardItem
              key={item.planID}
              item={item}
              username={this.props.username}
              editPlan={this.props.editPlan}
            />
          ))}
        </div>
      </div>
    );
  }
}