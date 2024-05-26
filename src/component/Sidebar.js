import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import Sidebarmob from './Sidebarmob.js'
import axios from 'axios';

function Sidebar() {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  const sampleTexts = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    "Excepteur sint occaecat cupidatat non proident",
    "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis elit eget libero consectetur, at semper felis tristique. Proin sodales est nec nulla pharetra, id vehicula enim fermentum.",
    "Proin eget justo eu arcu efficitur pellentesque eu ac nulla. Nam pulvinar lacus eu nisi ultricies, vel gravida odio venenatis. Ut vitae velit nec velit elementum pharetra.",
    "Maecenas sit amet ligula id nunc vestibulum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a ex ac leo consectetur rutrum.",
    "Pellentesque vel est sit amet nunc fermentum laoreet. Cras commodo sapien nec fermentum condimentum. Suspendisse ut odio vel justo consequat tristique."
  ];
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <Sidebarmob />
        </button>
      )}
      {
        !phoneActive && (

          <div className="sidebar">
            <div className="logo">
              Search History
            </div>
            <ul className="menu">
              <li><Link to="/">Hey</Link></li>
              <li><a href="#">Messages</a></li>

              {sampleTexts.map((i) => (
                <li><Link to="/">{i}</Link></li>
              ))}

            </ul>
          </div >
        )
      }
    </>
  );
}

export default Sidebar;
