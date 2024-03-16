import React, { useState } from 'react';
import '../2.RegisterPage/register.css';

export default function Register() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        selectCity: '',
        docs: [],
    });

    const [saveData, setSaveData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === "" || data.password === "") {
            alert('Please fill in all fields');
        } else {
            setSaveData([...saveData, data]);
            localStorage.setItem("userData", JSON.stringify([...saveData, data]));
        }
        setData({
            firstName: '',
            lastName: '',
            email: '',
            selectCity: '',
            docs: [],
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="header-p">
                        <div className="header" style={{ backgroundColor: 'lightblue' }}>
                            <h1>Registration form</h1>
                        </div>
                        <div className="main">
                            <div className="name">
                                <div className="firstName">
                                    <label htmlFor="firstName">Enter your first name</label>
                                    <input
                                        type="text"
                                        id='firstName'
                                        name='firstName'
                                        value={data.firstName}
                                        onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="lastname">
                                    <label htmlFor="lastName">Enter your last name</label>
                                    <input
                                        type="text"
                                        id='lastName'
                                        name='lastName'
                                        value={data.lastName}
                                        onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="email">
                                <label htmlFor="email">Enter your email id</label>
                                <input
                                    type="text"
                                    id='email'
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </div>
                            <div className="selectCity">
                                <label htmlFor="selectCity">Select city</label>
                                <select
                                    name="selectCity"
                                    id="selectCity"
                                    value={data.selectCity}
                                    onChange={(e) => setData({ ...data, selectCity: e.target.value })}
                                >
                                    <option value="navsari">Navsari</option>
                                    <option value="surat">Surat</option>
                                    <option value="ahemdabad">Ahemdabad</option>
                                    <option value="bharuch">Bharuch</option>
                                </select>
                            </div>
                            <div className="selectDoc">
                                <div className="label">
                                    <label htmlFor="">Select Docs</label>
                                </div>
                                <div className="docs">
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            value='adhar_card'
                                            checked={data.docs.includes('adhar_card')}
                                            onChange={(e) => setData({ ...data, docs: [...data.docs, e.target.value] })}
                                        />
                                        Aadhar Card
                                    </label>
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            value='pan_card'
                                            checked={data.docs.includes('pan_card')}
                                            onChange={(e) => setData({ ...data, docs: [...data.docs, e.target.value] })}
                                        />
                                        Pan card
                                    </label>
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            value='driving_lic'
                                            checked={data.docs.includes('driving_lic')}
                                            onChange={(e) => setData({ ...data, docs: [...data.docs, e.target.value] })}
                                        />
                                        Driving licence
                                    </label>
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            value='birth_cirti'
                                            checked={data.docs.includes('birth_cirti')}
                                            onChange={(e) => setData({ ...data, docs: [...data.docs, e.target.value] })}
                                        />
                                        Birth certificate
                                    </label>
                                </div>
                            </div>
                            <div className="btn">
                                <button type="submit">Add Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
