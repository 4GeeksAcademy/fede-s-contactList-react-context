import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";


export const AddContact = () => {

    const {store, dispatch} = useGlobalReducer();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        id: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleAddContact = async (e) => {
        e.preventDefault();

        await add_contact();

        setContact({
            name: "",
            email: "",
            phone: "",
            address: "",
            id: null,
        })
        navigate('/contacts')
    };

    const add_contact = async () => {
        let body = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address
        }
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/fede/contacts', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            if (!response.ok) {
                console.log("Error trying to add a new contact: ", response.statusText);
                throw new Error(response.statusText);
            }

            const data = response.json()
            dispatch({type: 'add_contact', payload: data})
            return data
        } catch (error) {
            return error
        }
    }


    return (
        <div className=" w-75 container">
            <h1>Contact List</h1>
            <form className="row gx-3 gy-2 align-items-center">
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Name</label>
                    <input name="name" onChange={handleChange} type="text" className="form-control" id="specificSizeInputName" placeholder="Federico Serron" required/>
                </div>
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Email</label>
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input name="email" type="email" className="form-control" id="specificSizeInputGroupUsername" onChange={handleChange} placeholder="Email" required/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Phone</label>
                    <input name="phone" type="number" className="form-control" id="specificSizeInputName" onChange={handleChange} placeholder="+598 111 111 111" required/>
                </div>
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Address</label>
                    <input name="address" type="text" className="form-control" id="specificSizeInputName" onChange={handleChange} placeholder="0123 Bartels St" required/>
                </div>
                <div className="col-auto">
                    <button onClick={handleAddContact} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}