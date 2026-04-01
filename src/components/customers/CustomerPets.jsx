import React, { useState } from "react";
import "./CustomerPets.css";

const CustomerPets = () => {
  const name = localStorage.getItem("name") || "Customer";
  const [search, setSearch] = useState("");
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      birthDate: "2023-02-20",
      weight: "75 lbs",
      lastCheckup: "2026-02-15",
      health: "Healthy",
      photo: null,
      history: ["2026-02-15: Annual checkup - Healthy"],
    },
    {
      id: 2,
      name: "Bella",
      type: "Dog",
      breed: "Beagle",
      age: "2 years",
      birthDate: "2024-01-20",
      weight: "25 lbs",
      lastCheckup: "2026-01-20",
      health: "Healthy",
      photo: null,
      history: ["2026-01-20: Vaccination - Healthy"],
    },
  ]);

  const [editingPet, setEditingPet] = useState(null);
  const [historyPet, setHistoryPet] = useState(null);
  const [newPetModal, setNewPetModal] = useState(false);

  const handlePhotoUpload = (e, petId) => {
    const file = e.target.files[0];
    if (file) {
      const updatedPets = pets.map((p) =>
        p.id === petId ? { ...p, photo: file } : p
      );
      setPets(updatedPets);
    }
  };

  const handleEditSave = (updatedPet) => {
    setPets(pets.map((p) => (p.id === updatedPet.id ? updatedPet : p)));
    setEditingPet(null);
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPet = {
      id: pets.length + 1,
      name: form.name.value,
      type: form.type.value,
      breed: form.breed.value,
      age: form.age.value,
      birthDate: form.birthDate.value,
      weight: form.weight.value,
      lastCheckup: form.lastCheckup.value,
      health: form.health.value,
      photo: null,
      history: [],
    };
    setPets([...pets, newPet]);
    setNewPetModal(false);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-pets">
      {/* Top greeting */}
      <header className="pets-header">
        <div className="pets-greeting">
          <h1>Good morning, {name}</h1>
          <p>Here’s your dashboard overview.</p>
        </div>
        <div className="pets-actions">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <button className="add-btn" onClick={() => setNewPetModal(true)}>
            + New Pet
          </button>
        </div>
      </header>

      {/* Pet cards */}
      <div className="pets-grid">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-card">
            {pet.photo ? (
              <img
                src={URL.createObjectURL(pet.photo)}
                alt={`${pet.name}`}
                className="pet-photo"
              />
            ) : (
              <div className="pet-photo placeholder">No Photo</div>
            )}
            <h2>{pet.name}</h2>
            <p className="pet-breed">{pet.breed}</p>
            <p className="pet-health">{pet.health}</p>
            <ul className="pet-details">
              <li><strong>Type:</strong> {pet.type}</li>
              <li><strong>Age:</strong> {pet.age}</li>
              <li><strong>Birth Date:</strong> {pet.birthDate}</li>
              <li><strong>Weight:</strong> {pet.weight}</li>
              <li><strong>Last Checkup:</strong> {pet.lastCheckup}</li>
            </ul>
            <div className="pet-actions">
              <button className="edit-btn" onClick={() => setEditingPet(pet)}>Edit</button>
              <button className="history-btn" onClick={() => setHistoryPet(pet)}>Medical History</button>
              <label className="upload-btn">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handlePhotoUpload(e, pet.id)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* New Pet Modal */}
      {newPetModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Add New Pet</h4>
            <form onSubmit={handleAddPet}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Type:
                <input type="text" name="type" required />
              </label>
              <label>
                Breed:
                <input type="text" name="breed" required />
              </label>
              <label>
                Age:
                <input type="text" name="age" required />
              </label>
              <label>
                Birth Date:
                <input type="date" name="birthDate" required />
              </label>
              <label>
                Weight:
                <input type="text" name="weight" required />
              </label>
              <label>
                Last Checkup:
                <input type="date" name="lastCheckup" required />
              </label>
              <label>
                Health Status:
                <select name="health">
                  <option>Healthy</option>
                  <option>Needs Attention</option>
                  <option>Critical</option>
                </select>
              </label>
              <button type="submit" className="submit-btn">Save Pet</button>
              <button type="button" className="close-btn" onClick={() => setNewPetModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingPet && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Edit {editingPet.name}</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSave(editingPet);
              }}
            >
              <label>
                Age:
                <input
                  type="text"
                  value={editingPet.age}
                  onChange={(e) =>
                    setEditingPet({ ...editingPet, age: e.target.value })
                  }
                />
              </label>
              <label>
                Birth Date:
                <input
                  type="date"
                  value={editingPet.birthDate}
                  onChange={(e) =>
                    setEditingPet({ ...editingPet, birthDate: e.target.value })
                  }
                />
              </label>
              <label>
                Weight:
                <input
                  type="text"
                  value={editingPet.weight}
                  onChange={(e) =>
                    setEditingPet({ ...editingPet, weight: e.target.value })
                  }
                />
              </label>
              <label>
                Health Status:
                <select
                  value={editingPet.health}
                  onChange={(e) =>
                    setEditingPet({ ...editingPet, health: e.target.value })
                  }
                >
                  <option>Healthy</option>
                  <option>Needs Attention</option>
                  <option>Critical</option>
                </select>
              </label>
              <button type="submit" className="submit-btn">Save</button>
              <button type="button" className="close-btn" onClick={() => setEditingPet(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Medical History Modal */}
      {historyPet && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>{historyPet.name} - Medical History</h4>
            <ul>
              {historyPet.history.map((entry, idx) => (
                <li key={idx}>{entry}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setHistoryPet(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerPets;