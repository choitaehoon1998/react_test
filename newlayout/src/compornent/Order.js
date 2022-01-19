import ORDERSIDEMENU from "./sidemenu/orderSidemenu";

export default function Order(){
    return(
        <>
        <ORDERSIDEMENU />
        <div className="content-wrap">
            <div className="content">
                <div className="content-main">
                    <div className="content-title">
                        <h3>주문/배송</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}