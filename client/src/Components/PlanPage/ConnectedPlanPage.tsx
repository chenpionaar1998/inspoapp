// Libraries
import { connect } from "react-redux";

// Actions
import { clearPlanPage, getCurrentPlanInfo } from "./duck/Actions";

// Components
import PlanPage from './PlanPage';

// Types
import { AppState } from "../../RootReducer";

const mapStateToProps = (state: AppState) => ({
    currentPlanID: state.PlanPage.planID,
    currentPlanTitle: state.PlanPage.title,
    currentPlanStartDate: state.PlanPage.start,
    currentPlanEndDate: state.PlanPage.end
})

const ConnectedPlanPage = connect(
    mapStateToProps,
    {
        getCurrentPlanInfo: getCurrentPlanInfo,
        clearPlanPage: clearPlanPage,
    }
)(PlanPage as any)

export default ConnectedPlanPage;