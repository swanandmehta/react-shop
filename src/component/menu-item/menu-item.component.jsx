import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <div>
            {
                Object.keys(props).map((value) => {
                    return <h1>{value}</h1>
                })
            }
            <hr/>
        </div>
    );
}

export default withRouter(MenuItem)