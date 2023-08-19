import React, { useState } from 'react';

const PatientForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [medication, setMedication] = useState('');
    const [error, setError] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(Number(event.target.value));
    };

    const handleMedicationChange = (event) => {
        setMedication(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const patient = { name, age, medication }

        const response = await fetch('http://localhost:4000/api/patients/', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setAge(0)
            setMedication('')
            setError(null)
            console.log('new patient added', json)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={handleAgeChange}
                />
            </div>
            <div>
                <label htmlFor="medication">Medication:</label>
                <input
                    type="text"
                    id="medication"
                    value={medication}
                    onChange={handleMedicationChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PatientForm;
