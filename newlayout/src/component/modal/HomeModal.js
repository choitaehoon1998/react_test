import React, { useState } from "react";
import MyModal from "./MyModal";
import ChildModal from "./ChildModal";

const HomeModal = () => {
  let contentBody = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const [isOpen, setIsOpen] = useState(false); // Parent 모달
  const [childOpen, setChildOpen] = useState(false); // Child 모달
  const [modalContent, setModalContent] = useState({
    id: "",
    title: "Basic Modal",
    body: contentBody,
    childModal: undefined,
    width: "1200px",
    height: "600px",
    scroll: "",
    transData: "translate(-50%,-50%)",
    minHeight: "50%",
    launchFnc: function () {},
  });

  const handleClick = (e) => {
    if (e.target.id === "childModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "Nested Modal",
        childModal: "Y",
      }));
    } else if (e.target.id === "smallModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "Small Modal",
        width: "600px",
        height: "300px",
      }));
    } else if (e.target.id === "largeModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "Large Modal",
        width: "2000px",
        height: "1000px",
      }));
    } else if (e.target.id === "BackdropModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "Backdrop Modal",
        launchFnc: function () {
          handleModalSubmit(e);
        },
      }));
    } else if (e.target.id === "scrollModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        body: contentBody.repeat(15),
        title: "scroll Modal",
        scroll: "scroll",
      }));
    } else if (e.target.id === "RightModal") {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "RightModal Modal",
        width: "750px",
        height: "600px",
        transData: "translate(61%,-50%)",
        minHeight: "100%",
      }));
    } else {
      setModalContent((modalContent) => ({
        ...modalContent,
        id: e.target.id,
        title: "Basic Modal",
      }));
    }

    setIsOpen(true);
  };

  const childModal = () => {
    setChildOpen(true);
  };

  const handleModalSubmit = (e) => {
    setModalContent((modalContent) => ({
      ...modalContent,
      id: "",
      title: "Basic Modal",
      body: contentBody,
      childModal: undefined,
      width: "1200px",
      height: "600px",
      scroll: "",
      transData: "translate(-50%,-50%)",
      minHeight: "50%",
      launchFnc: function () {},
    }));

    // 모달 버튼 액션
    switch (e.target.id) {
      case "save":
        console.log(e.target.id);
        setIsOpen(false);
        break;
      case "modify":
        console.log(e.target.id);
        setIsOpen(false);
        break;
      case "remove":
        console.log(e.target.id);
        setIsOpen(false);
        break;
      case "cancel":
        return setIsOpen(false);

      default:
        return setIsOpen(false);
    }
  };

  const handleChildSubmit = () => {
    setChildOpen(false);
  };

  const handleChildClick = () => {
    setChildOpen(false);
  };

  return (
    <>
      <div className="content-wrap">
        <div className="content">
          <div className="content-main">
            <div className="content-title">
              <h3>Modal</h3>
            </div>
            <div className="content-body">
              <div>
                <button
                  className="btn btn-color"
                  id="basicModal"
                  onClick={(e) => handleClick(e)}
                >
                  Basic Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="scrollModal"
                  onClick={(e) => handleClick(e)}
                >
                  Scrolling Long Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="BackdropModal"
                  onClick={(e) => handleClick(e)}
                >
                  Backdrop Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="RightModal"
                  onClick={(e) => handleClick(e)}
                >
                  Right Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="childModal"
                  onClick={(e) => handleClick(e)}
                >
                  Nested Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="smallModal"
                  onClick={(e) => handleClick(e)}
                >
                  Small Modal
                </button>
              </div>
              <div>
                <button
                  className="btn btn-color"
                  id="largeModal"
                  onClick={(e) => handleClick(e)}
                >
                  Large Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyModal
        isOpen={isOpen}
        onSubmit={handleModalSubmit}
        childModalOpen={childModal}
        modalContent={modalContent}
      ></MyModal>
      <ChildModal
        openModal={childOpen}
        onChildSubmit={handleChildSubmit}
        onChildCancel={handleChildClick}
      />
    </>
  );
};

export default HomeModal;
