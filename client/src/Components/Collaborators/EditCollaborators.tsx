// Libraries
import React from 'react';
import { Button, Modal } from 'reactstrap';

type EditCollaboratorsState = {
    showModal: boolean
}

type EditCollaboratorsProps = {
    planID: string
}

class EditCollaborators extends React.PureComponent<EditCollaboratorsProps, EditCollaboratorsState> {
    state = {
        showModal: false
    }

    toggleEditCollaborators = (e: React.MouseEvent): void => {
        e.preventDefault();
        this.setState(prevState => {
            return {showModal: !prevState.showModal}
        })
    }

    render() {
        return (
            <div className = 'form_wrapper theme-light wrapper blocks-with-shadow-theme top-navigation'>
                <Button 
                    className="icon btn-primary profile_editCollab" 
                    onClick={this.toggleEditCollaborators}>
					<p>Edit collaborators</p>
				</Button>
                <Modal
                    isOpen={this.state.showModal}
                    toggle={this.toggleEditCollaborators}
                    className={"modal-dialog--primary theme-light"}
                >
                    <div className="modal_header">
                        <button className="lnr lnr-cross modal_close-btn" type="button" onClick={this.toggleEditCollaborators} />
                        <h4 className="modal_title">Add or remove Collaborators</h4>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default EditCollaborators;