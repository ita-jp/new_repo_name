import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {redirect, useNavigate} from "react-router-dom";


interface CsrfResponse {
    token: string;
    headerName: string;
    parameterName: string;
}

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const csrfResponse = await fetch('http://localhost:8080/api/csrf', {
            method: 'GET',
            credentials: 'include',
        });
        const csrfJson: CsrfResponse = await csrfResponse.json();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append(csrfJson.parameterName, csrfJson.token);

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });
            console.log(response);

            if (response.status === 401) {
                setError('ユーザー名またはパスワードが違います');
            } else {
                setError('');
                navigate("/");
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div>
            <h1 className="mb-3">ログイン</h1>
            <p className="text-danger">{error}</p>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="username"
                        placeholder="ユーザー名"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value)
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