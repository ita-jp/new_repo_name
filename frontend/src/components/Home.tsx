import {useContext} from "react";
import {useAuth} from "../contexts/AuthContext";

const Home = () => {
    const authContext = useAuth();
    if (authContext?.username) {
        return (
            <div>
                <p className="mt-3 fs-1">Hello, {authContext.username}!</p>
            </div>
        );
    }

    return (
        <div>
            <p className="mt-3 fs-1">Hello, world! Please login first.</p>
        </div>
    );
}

export default Home;