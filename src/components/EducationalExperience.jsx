import { useState } from "react";

function EducationalExperience() {
    const [editable, setEditable] = useState(false);
    const [schoolName, setSchoolName] = useState('');
    const [title, setTitle] = useState('');
    const [dos, setDos] = useState('');

    return (
        <div>
            <h4>Educational Experience</h4>
            {
                editable ||
                <div>
                    <p>school name: {schoolName}</p>
                    <p>title: {title}</p>
                    <p>date of study: {dos}</p>
                </div>
            }

            {
                editable &&
                <div>
                    <input
                        type="text"
                        value={schoolName}
                        placeholder="Enter school name..."
                        onChange={event => setSchoolName(event.target.value)}
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
                        placeholder="Enter date of study..."
                        onChange={event => setDos(event.target.value)}
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

export default EducationalExperience;