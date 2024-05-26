import React, { useState } from 'react';
import './Formi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import { Route, useNavigate } from 'react-router-dom';
const Formi = () => {
  // State for form input values

  const [formData, setFormData] = useState({
    name: '',
    dbName: 'MYSQL',
    host: '',
    password: '',
    database: '',
    dbSchema: '',
    user: '',
  });
  const navigate = useNavigate();

  // Handler for form submission
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://18.223.164.31/connect_old', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      if (data.message) {
        toast.success(data.message);
      } else {
        toast.success('Form submitted successfully');
      }

      setError(null);
      // Reset form data
      setFormData({
        name: '',
        dbName: 'MYSQL',
        host: '',
        password: '',
        database: '',
        dbSchema: '',
        user: '',
      });
      navigate('/home');
    } catch (error) {
      setError(error.message);
      toast.error(`Error submitting form: ${error.message}`);
      setFormData({
        name: '',
        dbName: 'MYSQL',
        host: '',
        password: '',
        database: '',
        dbSchema: '',
        user: '',
      });

    }
  };
  // Handler for input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <div className='mainnn'>
      <form onSubmit={submitHandler} className='form1'>
        <h1 className='ti'>User Info</h1>
        <div className="form-group">
          <label htmlFor='name' className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor='database' className='form-label'>Select Database</label>
          <select
            className='form-select'
            name='dbName'
            value={formData.dbName}
            onChange={handleInputChange}
          >
            <option value="MYSQL">MYSQL</option>
            <option value="SnowFlakes">SnowFlakes</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='host' className='form-label'>DB Host</label>
          <input
            type='text'
            className='form-control'
            id='host'
            name='host'
            value={formData.host}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dbuser' className='form-label'>DB User</label>
          <input
            type='user'
            className='form-control'
            id='user'
            name='user'
            value={formData.user}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>DB Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dbName' className='form-label'>DB Name</label>
          <input
            type='text'
            className='form-control'
            id='database'
            name='database'
            value={formData.database}
            onChange={handleInputChange}
          />
        </div>
        {
          formData.dbName == "SnowFlakes" ? <div className='form-group'>
            <label htmlFor='dbName' className='form-label'>DB Schema</label>
            <input
              type='text'
              className='form-control'
              id='DB Schema'
              name='DB Schema'
              value={formData.dbSchema}
              onChange={handleInputChange}
            />
          </div> : ""
        }
        <div className='form-group'>
          <div className='bntic'>
            <button type="submit" className="cx">Connect</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formi;
