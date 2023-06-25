import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      setEmployees(response.data.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <div className='auth--logo'>
      <input className='search'
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredEmployees.map(employee => (
        <div key={employee.id} className='auth--logo'>
          <img src={employee.avatar} alt={employee.first_name} />

          
  
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id='batch'>
    1
    <span class="visually-hidden">unread messages</span>
  </span>


          <p>ID: {employee.id}</p>
          <p>Name: {employee.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default Employee;
