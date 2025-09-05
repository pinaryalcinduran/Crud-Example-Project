
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", department: "", position: "" });


  const fetchEmployees = () => {
    axios.get("http://localhost:8085/employee/all")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8085/employee/save", form)
      .then(() => {
        setForm({ name: "", department: "", position: "" });
        fetchEmployees();
      })
      .catch(err => alert("Ekleme hatası!"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Çalışanlar</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.department} - {emp.position}
          </li>
        ))}
      </ul>
      <h3>Yeni Çalışan Ekle</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ad"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Departman"
          value={form.department}
          onChange={e => setForm({ ...form, department: e.target.value })}
        />
        <input
          placeholder="Pozisyon"
          value={form.position}
          onChange={e => setForm({ ...form, position: e.target.value })}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default App;