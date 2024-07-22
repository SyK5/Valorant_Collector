import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <h1>Page not Found you will get back to Mainpage in 5 sec</h1>
    )
}

export default NotFound