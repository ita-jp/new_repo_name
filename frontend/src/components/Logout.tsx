import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import {userService} from "../api/userService";

const Logout = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const authContext = useAuth();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        userService.logout().then(() => {
            authContext.logout();
            navigate("/");
        }).catch((error) => {
            // TODO error message
            // TODO 401, 403 (csrf), 5xx
            setError(error.message);
        });
    }

    return (
        <div>
            <h1 className="mt-3">ログアウト</h1>
            <p className="text-danger">{error}</p>
            <Form onSubmit={e => handleSubmit(e)}>
                <Button variant="primary" type="submit">ログアウト</Button>
            </Form>
        </div>
    )
}

export default Logout;