import GoodsSIDEMENU from "./sidemenu/GoodsSidemenu";

export default function Goods(){
    return(
        <>
        <GoodsSIDEMENU />
        <div className="content-wrap">
            <div className="content">
                <div className="content-main">
                    <div className="content-title">
                        <h3>상품</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}