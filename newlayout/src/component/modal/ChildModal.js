import ReactModal from "react-modal";



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

    return (
        <>
            <ReactModal isOpen={openModal} style={modalStyle}>
            <div>
            <div className = "modalHeader">
                <div className = "modalTitle">
                    <h1>Nested Modal</h1>
                </div>
                    <div className = "modalButton">
                    <button
                        className="btn btn-color"
                        id="save"
                        onClick={handleClickSubmit}
                    >
                        저장
                    </button>
                    <button
                        className="btn btn-color"
                        id="modify"
                        onClick={handleClickSubmit}
                    >
                        수정
                    </button>
                    <button
                        className="btn btn-color"
                        id="remove"
                        onClick={handleClickSubmit}
                    >
                        삭제
                    </button>
                    <button
                        className="btn btn-color"
                        id="cancel"
                        onClick={handleClickCancel}
                    >
                        취소
                    </button>
                </div>
                    </div>
                    </div>
                <div>하위 모달입니다</div>
        </ReactModal>
      </>
    );
}

export default ChildModal;