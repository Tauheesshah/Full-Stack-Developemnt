import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    id: 0,
    event_Types: "",
    locations: "",
    type: "",
    organizer_Name: ""
  });

  const [isEdit, setIsEdit] = useState(false);

  const API = "https://localhost:7046/api/Events";

  
  const getEvents = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      
      await fetch(`${API}/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    } else {
      
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    }

    
    setFormData({
      id: 0,
      event_Types: "",
      locations: "",
      type: "",
      organizer_Name: ""
    });

    setIsEdit(false);
    getEvents();
  };

  
  const handleEdit = (item) => {
    setFormData(item);
    setIsEdit(true);
  };

  
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    getEvents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Management System</h2>

      
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="event_Types"
          placeholder="Event Type"
          value={formData.event_Types}
          onChange={handleChange}
        />

        <input
          type="text"
          name="locations"
          placeholder="Location"
          value={formData.locations}
          onChange={handleChange}
        />

        <input
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
        />

        <input
          type="text"
          name="organizer_Name"
          placeholder="Organizer"
          value={formData.organizer_Name}
          onChange={handleChange}
        />

        <button type="submit">
          {isEdit ? "Update Event" : "Add Event"}
        </button>
      </form>

    
      <table border="1" cellPadding="20">
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Type</th>
            <th>Location</th>
            <th>Type</th>
            <th>Organizer</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {events.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.event_Types}</td>
              <td>{item.locations}</td>
              <td>{item.type}</td>
              <td>{item.organizer_Name}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;

