import SideMenu from "../../sidemenu";

const Test = () => {
    
    return(
        <SideMenu.Consumer>
            {(value) => (
                <div style={{background}}></div>
                
            )}
        </SideMenu.Consumer>
    );
};
export default Test;
