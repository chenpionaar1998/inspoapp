// Libraries
import React from 'react';
import { Button, ButtonToolbar, Modal, Input } from 'reactstrap';
import uuid from 'uuid';

// Types
import { TravelPlanInfoType, UserPlanLinkType } from './types';
import { InsertPlanAction, EditPlanAction } from '../../Dashboard/duck/Types';

// Util
import { isCreatePlan } from './util';
import { trimTimeString } from '../../../utils/strings';

type PlanModalProps = {
    username: string;
    item?: TravelPlanInfoType;
    buttonName: string;
    buttonText: string;
    onClick: (formData: TravelPlanInfoType)=> InsertPlanAction | EditPlanAction;
    onLinkUser?: (formdata: UserPlanLinkType) => void;
}

type PlanModalState = {
    planID: string;
    isOpen: boolean;
    hasDateError: boolean;
    title: string;
    start: string;
    end: string;
}

export default class PlanModal extends React.PureComponent<PlanModalProps, PlanModalState> {
    state = {
        planID: this.props.item ? this.props.item.planID : uuid.v4(),
        isOpen: false,
        hasDateError: false,
        title: "",
        start: "",
        end: ""
    }

    toggleModal = (): void => {
        if (this.props.item && isCreatePlan(this.props.buttonText)){
            this.setState(prevState => ({ 
                isOpen: !prevState.isOpen,
                hasDateError: false,
                title: "",
                start: "",
                end: ""
            }));
        }
        else {
            this.setState(prevState => ({
                isOpen: !prevState.isOpen,
                hasDateError: false,
                title: this.props.item ? this.props.item.title : "",
                start: this.props.item ? trimTimeString(this.props.item.start) : "",
                end: this.props.item ? trimTimeString(this.props.item.end) : ""
            }))
        }
    }

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputPropName: string): void => {
		this.setState<never>( {
			[inputPropName] : event.target.value
        }, () => {
            if (inputPropName === "start" || inputPropName === "end") {
                if (this.state.start !== "" && this.state.end !== "") {
                    // Check end date and start date
                    const start = new Date(this.state.start);
                    const end = new Date(this.state.end);

                    if (start.getTime() > end.getTime()) {
                        this.setState({ hasDateError: true });
                    }
                    else {
                        this.setState({ hasDateError: false });
                    }
                }
            }
        });
    }
    
    hasEmptyField = (): boolean | undefined => {
        return this.state.title === "" || this.state.start === "" || this.state.end === "" || this.state.hasDateError;
    }

    createPlan = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();

        const formData: TravelPlanInfoType = {
            planID: this.state.planID,
            title: this.state.title,
            start: this.state.start,
            end: this.state.end
        }

        const linkData: UserPlanLinkType = {
            email: this.props.username,
            planID: this.state.planID
        }

        this.props.onClick(formData);
        this.props.onLinkUser && this.props.onLinkUser(linkData);

        this.toggleModal();
    }

    editPlan = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();

        const formData: TravelPlanInfoType = {
            planID: this.state.planID,
            title: this.state.title,
            start: this.state.start,
            end: this.state.end
        }

        this.props.onClick(formData);

        this.toggleModal();
    }

    render() {
        return (
            <div  className="theme-light wrapper squared-corner-theme blocks-with-shadow-theme top-navigation">
                <Button
                    outline={false}
                    size='sm'
                    color='primary'
                    btn={this.props.buttonName}
                    className="icon account_btn"
                    onClick={this.toggleModal}
                >
                    {this.props.buttonText} Plan
                </Button>
                <Modal
                    isOpen={this.state.isOpen}
                    toggle={this.toggleModal}
                    className={"modal-dialog--primary theme-light"}
                >
                    <div className="modal_header">
                        <button className="lnr lnr-cross modal_close-btn" type="button" onClick={this.toggleModal} />
                        <h4 className="modal_title">{this.props.buttonName}</h4>
                    </div>
                    <div className="dashboard_place-order-form">
                    <form className="form form--vertical" >
                            <div className="form_form-group">
                                <span className="form_form-group-label">Plan Title</span>
                                <div className="form_form-group-field">
                                    <Input
                                        name="title"
                                        type="text"
                                        placeholder="Title"
                                        value={this.state.title}
                                        onChange={event => this.handleInputChange(event, "title")}
                                    />
                                </div>
                            </div>
                            <div className="form_form-group">
                                <span className="form_form-group-label">Start Date</span>
                                <div className="form_form-group-field">
                                    <Input
                                        name="startDate"
                                        type="date"
                                        placeholder="yyyy-mm-dd"
                                        value={this.state.start}
                                        onChange={event => this.handleInputChange(event, "start")}
                                    />
                                </div>
                            </div>
                            <div className="form_form-group">
                                <span className="form_form-group-label">End Date</span>
                                <div className="form_form-group-field">
                                    <Input
                                        name="endDate"
                                        type="date"
                                        placeholder="yyyy-mm-dd"
                                        value={this.state.end}
                                        onChange={event => this.handleInputChange(event, "end")}
                                    />
                                </div>
                                <span style={{display: this.state.hasDateError ? "" : "none", color: "red"}}>The end date needs to be after the start date.</span>
                            </div>
                            <ButtonToolbar className="modal_footer">
                                <Button outline={false} color="primary" type="submit" disabled={this.hasEmptyField()} onClick={this.props.buttonText === "Create" ? this.createPlan : this.editPlan}>{this.props.buttonText}</Button>
                                <Button onClick={this.toggleModal}>Cancel</Button>
                            </ButtonToolbar>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}