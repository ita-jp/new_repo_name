import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import {userService} from "../api/userService";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const authContext = useAuth();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        userService.login({username: email, password: password}).then(() => {
            authContext.login(email);
            navigate("/");
        }).catch((error) => {
            // TODO error message
            // TODO 401, 403 (csrf), 5xx
            setError(error.message);
        });
    }

    return (
        <div>
            <h1 className="mt-3">ログイン</h1>
            <p className="text-danger">{error}</p>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="パスワード"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">ログイン</Button>
            </Form>
        </div>
    )
}

export default Login;