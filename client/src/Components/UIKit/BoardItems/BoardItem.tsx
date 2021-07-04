// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PlanModal from '../PlanModal/PlanModal';

// Icons
import ArrowRightIcon from "mdi-react/ArrowRightIcon";

// Actions
import { EditPlanAction, DeletePlanAction } from '../../Dashboard/duck/Types';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from '../PlanModal/types';

// Utils
import { trimTimeString } from '../../../utils/time';

type BoardItemProps = {
  index: number;
  item: TravelPlanInfoType;
  username: string;
  editPlan: (formData: TravelPlanInfoType) => EditPlanAction;
  deletePlan: (userLink: UserPlanLinkType) => DeletePlanAction;
}

export default class BoardItem extends React.PureComponent<BoardItemProps> {
  deletePlan = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    const userLink: UserPlanLinkType = {
      email: this.props.username,
      planID: this.props.item.planID
    };

    this.props.deletePlan(userLink);
  }

  getRandomIndex = (max: number): number => {
    return Math.floor(Math.random() * max)
  }

  render() {
    return (
      <div className="board">
        <Link to={`/plan/${this.props.item.planID}`}>
          <div className="board_style">
              <div className="board_img-wrap">
                <img className="board_img" src={"scenery/scene" + (this.props.index % 6 + 1) + ".jpg"} alt="board-img" /> 
              </div>
              <div className="board_info">
                <h4 className="board_title">{this.props.item.title}</h4>
                <p className="board_description">
                  {trimTimeString(this.props.item.start)}
                  &nbsp;<ArrowRightIcon size="12px"/>&nbsp;
                  {trimTimeString(this.props.item.end)}
                </p>
                {/*{item.collaborators.map((c, index) => (
                  <span
                    key={index}
                  />
                ))} */}
              </div>
          </div>
        </Link>
        <div className="board_btn">
          <PlanModal
            item={this.props.item}
            username={this.props.username}
            buttonName="Edit plan"
            buttonText="Edit"
            onClick={this.props.editPlan}
          />
          <button 
            className="lnr lnr-cross board_close-btn" 
            type="button" 
            onClick={this.deletePlan} />
        </div>
      </div>
    )
  }
}