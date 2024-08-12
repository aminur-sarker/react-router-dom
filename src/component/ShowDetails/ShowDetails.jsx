import { useLoaderData } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ShowDetails = () => {
    const user = useLoaderData()
    const { name, website , email } = user



    // if we did not want to use <Link> then we can use handle event
    const navigate = useNavigate()
    const handleGoBackBtn = () => {
        navigate(-1)
    }
    return (
        <div style={{
            "background-color": "yellow",
            "border-style": "solid",
            "margin-top": "10px",
            "border-color": "red"
        }}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Website:{website}</h3>           
            <button onClick={handleGoBackBtn}>Go Back</button>
        </div>
    );
};

export default ShowDetails;