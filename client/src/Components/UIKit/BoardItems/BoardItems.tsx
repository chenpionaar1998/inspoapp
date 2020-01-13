// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Types
import { TravelPlanInfoType } from '../types';

// Components
// import PlanModal from '../PlanModal';

// Utils
import { trimTimeString } from '../../../utils/strings';

type BoardItemsProps = {
    items: TravelPlanInfoType[];
}

export default class BoardItems extends React.PureComponent<BoardItemsProps> {
    
  render() {
    return (
      <div className="boards_wrap">
        <div className="boards">
          {this.props.items.map((item, i) => (
            <div className="board" key={i}>
              <Link className="board_link" to={'/'}>
                <div className="board_img-wrap">
                  <img className="board_img" src={""} alt="board-img" />
                </div>
                <div className="board_info">
                  <h4 className="board_title">{item.title}</h4>
                <p className="board_description">{trimTimeString(item.start)}</p>
                  {/*{item.collaborators.map((c, index) => (
                    <span
                      key={index}
                    />
                  ))} */}
                </div>
              </Link>
              <div className="board_btn">
                {/* <PlanModal
                    username={this.props.username}
                    buttonName="Edit plan"
                    buttonText="Edit"
                    onClick={this.props.createPlan}
                  size="sm"
                  btn="Edit plan"
                  outline={true}
                  buttonClassName="icon account_btn"
                  planID={item.planID}
                  onSubmit={this.props.editPlan}
                /> */}
                {/* <button className="lnr lnr-cross board_close-btn" type="button" onClick={e => this.handleDelete(e, item.planID)} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}