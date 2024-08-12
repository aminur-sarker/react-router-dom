import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div style={{
            "border-style": "solid",
            "border-color": "red",
            "background-color": "red",
            "margin-right": "300px",
            "margin-left": "300px",
            "border-radius": "10px",
            "padding-bottom": "10px"

        }}>
            <h2 style={{
                "textAlign": "center"
            }}>Oops!!!</h2>
            <i style={{
                "margin-left": "165px",
                "textAlign": "center"
            }}>{error.statusText || error.message}</i>
            <p style={{    
                "margin-left": "5px",            
                "textAlign": "center"
            }}>Go back to home</p>
            <Link style={{
                "border-style": "solid",
                "border-color": "red",
                "background-color": "green",
                "margin-left": "160px",
                "color": "white",
                "border-radius": "6px",
                "padding-bottom": "5px",
                "padding-top": "5px",
                "padding-right": "5px",
                "padding-left": "5px",

               
            }} to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;