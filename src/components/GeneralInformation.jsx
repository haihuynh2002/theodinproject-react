import { useState } from "react";

function GeneralInformation() {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div>
            <h4>General Information</h4>
            {
                editable ||
                <div>
                    <p>name: {name}</p>
                    <p>email: {email}</p>
                    <p>phone: {phone}</p>
                </div>
            }

            {
                editable &&
                <div>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter name..."
                        onChange={event => setName(event.target.value)}
                    />
                    
                    <br />

                    <input
                        type="text"
                        value={email}
                        placeholder="Enter email..."
                        onChange={event => setEmail(event.target.value)}
                    />

                    <br />

                    <input
                        type="text"
                        value={phone}
                        placeholder="Enter phone..."
                        onChange={event => setPhone(event.target.value)}
                    />
                </div>
            }
            

            <br />

            <button
                onClick={() => setEditable(false)}
                disabled={!editable}
            >
                Sumbit
            </button>
            <button 
                onClick={() => setEditable(true)}
                disabled={editable}
            >
                Edit
            </button>
        </div>
    )
}

export default GeneralInformation;