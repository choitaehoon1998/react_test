import ReactModal from "react-modal";

const MyModal = ({isOpen,onSubmit,childModalOpen,modalContent}) => {

    const handleChildModal = () => {
        childModalOpen();
    }

    const handleClickSubmit = (e) => {
        onSubmit(e);
    }

    const modalStyle = {
        overlay : {
            position: "fixed",
            zIndex: 13,
        },
        content: {
            position: "fixed",
            width : modalContent.width,
            height : modalContent.height,
            top: "50%",
            left: "50%", 
            transform : modalContent.transData,
            zIndex: 13,
            minHeight : modalContent.minHeight,
            overflowY: modalContent.scroll
        }
    }

    return(
        <>
        <ReactModal isOpen={isOpen} onRequestClose={(e) => modalContent.launchFnc(e)} style={modalStyle}>
            <div>
                <div className = "modalHeader">
                    <div className = "modalTitle">
                        <h1>{modalContent.title}</h1>
                    </div>
                    <div className = "modalButton">
                        <button className='btn btn-color' id="save" onClick={(e) => handleClickSubmit(e)}>저장</button>
                        <button className='btn btn-color' id="modify" onClick={(e) => handleClickSubmit(e)}>수정</button>
                        <button className='btn btn-color' id="remove" onClick={(e) => handleClickSubmit(e)}>삭제</button>
                        <button className='btn btn-color' id="cancel" onClick={(e) => handleClickSubmit(e)}>취소</button>
                        {modalContent.childModal && <button className='btn btn-color' id="childModal" onClick={handleChildModal}>모달 열기</button>}
                    </div>
                </div>
            </div>
            <div>
                {modalContent.body}
            </div>

            
            
        </ReactModal>
        </>
    );
}
export default MyModal;