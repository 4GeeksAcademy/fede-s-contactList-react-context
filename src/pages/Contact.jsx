import { Link, useNavigate } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect } from "react";


export const Contact = () => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();


    const handleDeleteContact = async (id) => {

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/fede/contacts/${id}`, { method: 'DELETE' })

            if (!response.ok) {
                throw new Error("Error trying to DELETE the contact", response.status);
            }
            dispatch({ type: 'delete_contact', payload: id })

        } catch (error) {
            console.log("Error deleting contact from api", error)
        }
    }

    useEffect(() => {

        const get_contacts = async () => {

            try {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/fede/contacts`, { method: 'GET' });

                if (!response.ok) {
                    console.log("Error getting all the contacts", response.statusText)
                    throw new Error("Error getting all the contacts");
                }
                const data = await response.json();
                dispatch({ type: 'show_contacts', payload: data.contacts });

            } catch (error) {
                console.log("Error getting contacts from api", error)
            }

        }

        get_contacts()
    }, []);



    return (

        <div className="list-group w-75 container">
            <h1 className="mb-4">Contact List</h1>
            <Link className="btn btn-primary w-25 mb-4" to={"/addcontact/"}>Add Contact +</Link>


            {/* <!-- Contact --> */}
            {store && store.contacts?.map((contact) => {
                return (
                    <div key={contact.id} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{contact.name}</h5>
                            <div className="row text-center">
                                <span><Link to={"/editcontact/"}><i className="fa-solid fa-pen-to-square edit-icon"></i></Link></span>
                                <span><i onClick={() => handleDeleteContact(contact.id)} className="fa-solid fa-trash delete-icon"></i></span>
                            </div>
                        </div>
                        <p className="mb-1">Email: {contact.email}</p>
                        <small>{contact.phone}</small>
                    </div>
                );
            })}

        </div>
    );
}
