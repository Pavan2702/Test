import React, { useState } from 'react';
import '../1.log-in_page/login.css';

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [saveData, setSaveData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
            alert('Please fill in all fields');
        } else {
            setSaveData([...saveData, data]);

            localStorage.setItem("userData", JSON.stringify(data));
        }
        setData({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="header-p">
                        <div className="header">
                            <span><h1>Log in Page</h1></span>
                        </div>
                        <div className="main">
                            <div className="email">
                                <label htmlFor="email">Enter your email</label>
                                <input
                                    type="text"
                                    name='email'
                                    id='email'
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </div>
                            <div className="password">
                                <label htmlFor="password">Enter your Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    id='password'
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </div>
                            <div className="button">
                                <button type="submit">Submit Data</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
