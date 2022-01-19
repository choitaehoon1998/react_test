import { createContext } from "react/cjs/react.development";
import HOMESIDEMENU from "./sidemenu/homeSidemenu";

export default function Home(){
    return (
        
        <>
        <HOMESIDEMENU/>
        <div className="content-wrap">
           <div className="content">
                <div className="content-main">
                    <div className="content-title">
                        <h3>기본설정</h3>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}