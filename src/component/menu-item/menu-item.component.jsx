import { withRouter } from "react-router-dom";
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, linkUrl, size, match, history }) => {
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(match.url + linkUrl)}>
            <div className="background-img" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>

            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">Shop Now</span>
            </div>

        </div>
    );
}

export default withRouter(MenuItem)