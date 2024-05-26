import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import { GoSignOut } from "react-icons/go";
import { Route, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const disconnectHandler = async () => {

    try {
      const response = await fetch('http://18.223.164.31/close_connection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      if (!data.message) {
        throw new Error(data.error || 'Failed to disconnect');
      }

      if (data.message) {
        toast.success(data.message);
      } else {
        toast.success('Disconnected successfully');
      }
      navigate('/'); // Navigate to the home page after disconnecting

    } catch (error) {
      toast.error(`Error disconnecting: ${error.message}`);
    }
  };
  const logoutHandler = () => {

  }

  return (

    <>
      <div className="header">&nbsp; SQL query chatbot</div>
      <div className="fsfsf">
        <button type="button" className="btn btn-outline-secondary" onClick={disconnectHandler}>Disconnect</button>


      </div>
      <div className="ddds"><GoSignOut size={24} onClick={logoutHandler} /></div>
      <div className="dd">&nbsp; Introduce yourself, ask question and learn</div>
    </>
  );
}
