import React from 'react';

export default class BoardsLoadingIndicator extends React.PureComponent {
    render() {
        return (
            <div className="board">
                <div className="board_style">
                    <div className="board_img-wrap">
                        <div className="board_img_rect_loading"/>
                    </div>
                    <div className="board_info">
                        <div className="board_link" >
                            <div className="board_title_loading"/>
                        </div>
                        <div className="board_description_loading"/>
                    </div>
                </div>

                <div className="board_btn">
                    <div className="account_btn_loading" />
                    <div className="lnr lnr-cross board_close-btn_loading" />
                </div>
            </div>
        )
    }
}