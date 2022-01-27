import ReactModal from "react-modal";
import React from "react";


const ChildModal = ({openModal,onChildSubmit,onChildCancel}) => {
    
    const handleClickSubmit = () => {
        onChildSubmit();
    }

    const handleClickCancel = () => {
        onChildCancel();
    }

    const testStyle = 14;
    const translate = "translate(-50%,-50%)";

    const modalStyle = {
        overlay : {
            position: "fixed",
            zIndex: 14,
        },

        content: {
            position: "fixed",
            width: "700px",
            height : "500px",
            top: "50%",
            left: "50%", 
            transform : translate,
            zIndex: testStyle,
        }
    }

    return(
        <>
        <ReactModal isOpen={openModal} style={modalStyle}>
        <button id="save" onClick={handleClickSubmit}>저장</button>
            <button id="modify" onClick={handleClickSubmit}>수정</button>
            <button id="remove" onClick={handleClickSubmit}>삭제</button>
            <button id="cancel" onClick={handleClickCancel}>취소</button>
            <div>하위 모달입니다</div>
        </ReactModal>
        </>
    );
}

export default ChildModal;