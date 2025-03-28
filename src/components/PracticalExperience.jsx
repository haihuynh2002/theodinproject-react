import { useState } from "react";

function PracticalExperience() {
    const [editable, setEditable] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [dos, setDos] = useState('');
    const [doe, setDoe] = useState('');

    return (
        <div>
            <h4>Practical Experience</h4>
            {
                editable ||
                <div>
                    <p>company name: {companyName}</p>
                    <p>title: {title}</p>
                    <p>date of start: {dos}</p>
                    <p>date of end: {doe}</p>
                </div>
            }

            {
                editable &&
                <div>
                    <input
                        type="text"
                        value={companyName}
                        placeholder="Enter company name..."
                        onChange={event => setCompanyName(event.target.value)}
                    />
                    
                    <br />

                    <input
                        type="text"
                        value={title}
                        placeholder="Enter title..."
                        onChange={event => setTitle(event.target.value)}
                    />

                    <br />

                    <input
                        type="date"
                        value={dos}
                        placeholder="Enter date of start..."
                        onChange={event => setDos(event.target.value)}
                    />

                    <br />

                    <input
                        type="date"
                        value={doe}
                        placeholder="Enter date of end..."
                        onChange={event => setDoe(event.target.value)}
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

export default PracticalExperience;