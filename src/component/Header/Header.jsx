import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            "background-color": "aqua",
            "padding-top": "5px",
            "padding-bottom": "5px"
        }}>
            <Link style={{ "margin-right": "150px" }} to="home">Home</Link>
            <Link style={{ "margin-right": "150px" }} to="about">About us</Link>
            <Link style={{ "margin-right": "150px" }} to="contact">Contact Us</Link>
            <Link style={{ "margin-right": "150px" }} to="users">Users</Link>
        </div>
    );
};

export default Header;