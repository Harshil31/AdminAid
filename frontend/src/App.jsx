import Modal from './components/Modal';
import PatientForm from './components/PatientForm';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';


function App() {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, []);

  // Sample data for patients
  const patients = [
    { id: 1, name: 'Luis Diaz', condition: 'Stable', info: 'This is Luis. He are in stable condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329216415838218/abstral-official-cyOKLSgkgCE-unsplash.jpg?width=736&height=1106' },
    { id: 2, name: 'Michael Ogg', condition: 'Critical', info: 'This is Bart. He is in critical condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329215774097468/samanta-barba-alcala-QwNUkiDxjbo-unsplash.jpg?width=736&height=1106' },
    { id: 3, name: 'Nancy Wu', condition: 'Stable', info: 'This is Patient 3. They are in stable condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329215212068896/eduardo-barrios-XMCLLGGMMYU-unsplash.jpg?width=736&height=1106' },
    { id: 4, name: 'Bob Pope', condition: 'Critical', info: 'This is Patient 4. They are in critical condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329214872334387/filipe-almeida-XHpgMMiOvuM-unsplash.jpg?width=1104&height=1104' },
    { id: 5, name: 'Francis White', condition: 'Stable', info: 'This is Patient 5. They are in stable condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329214612275290/abbas-malek-hosseini-JC1oue4zY5U-unsplash.jpg?width=662&height=1106' },
    { id: 6, name: 'Krisha Dave', condition: 'Critical', info: 'This is Patient 6. They are in critical condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329214184468553/jan-canty-RXffyysKKbQ-unsplash.jpg?width=830&height=1106' },
    { id: 7, name: 'Ray Bradley', condition: 'Stable', info: 'This is Patient 7. They are in stable condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329213916020887/360_F_37357312_6GMQYcwMQwtw0N0s1NZ8bYogUv9buHHq.jpg?width=1080&height=720' },
    { id: 8, name: 'Vivian Yang', condition: 'Critical', info: 'This is Patient 8. They are in critical condition.', image: 'https://media.discordapp.net/attachments/1142312294446022689/1142329213110726706/jixiao-huang-I1Plc-FAAnQ-unsplash.jpg?width=1660&height=1106' },
  ];

  // State to track the currently selected patient and modal visibility
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle patient button click and open the modal
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleAddPatient = (patient) => {

  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">

      <header className="App-header">
        <h1 style={{ marginBottom: '5px', marginTop: '25px', marginLeft: '40px', fontSize: "45px" }}>Nursing Home Med Management System</h1>
        <p style={{ marginBottom: '5px', marginTop: '15px', marginLeft: '40px', fontSize: "25px" }}>{format(currentDateTime, 'EEEE MMMM dd, yyyy - hh:mm a')}</p>
        <h3 className="leftA" style={{ marginBottom: '5px', marginTop: '70px', marginLeft: '30px', marginRight: '449px', fontSize: "30px", }}>Patient View
          <button className="add-patient-button" onClick={handleAddPatient}> Add Patient </button>
        </h3>
      </header>
      <main>

        <section className="patient-scroll-container">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`patient-card ${selectedPatient && selectedPatient.id === patient.id ? 'selected' : ''}`}
            >
              <img src={patient.image} alt={'Image of ${patient.name}'} className="patient-image" />
              <div className="patient-details">
                <div className="patient-name">{patient.name}</div>
                <button
                  className="patient-button"
                  onClick={() => handlePatientClick(patient)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            patient={selectedPatient}
          />
        )}
        <div>
          <PatientForm />
        </div>


      </main>
    </div>
  );
}

export default App;


