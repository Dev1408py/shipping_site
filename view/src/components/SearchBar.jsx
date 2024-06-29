import React, { useState } from 'react';
import '../App.css';

function SearchBox() {
    const [selectedTab, setSelectedTab] = useState('tracking');
    const [trackingOption, setTrackingOption] = useState('container');
    const [fromPort, setFromPort] = useState('');
    const [toPort, setToPort] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
        "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
        "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", 
        "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
        "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", 
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
        "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
        "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", 
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
        "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
        "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", 
        "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", 
        "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

  
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };
  
    const handleTrackingOptionChange = (e) => {
      setTrackingOption(e.target.value);
    };
  
    const handleFromPortChange = (e) => {
      setFromPort(e.target.value);
    };
  
    const handleToPortChange = (e) => {
      setToPort(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    return (
      <div className="tracking-container">
        <div className="tabs">
          <button className={`tab ${selectedTab === 'tracking' ? 'active' : ''}`} onClick={() => handleTabChange('tracking')}>TRACKING</button>
          <button className={`tab ${selectedTab === 'schedules' ? 'active' : ''}`} onClick={() => handleTabChange('schedules')}>SCHEDULES</button>
          <button className={`tab ${selectedTab === 'contacts' ? 'active' : ''}`} onClick={() => handleTabChange('contacts')}>CONTACTS</button>
        </div>
        <div className="content">
          {selectedTab === 'tracking' && (
            <>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    value="container"
                    checked={trackingOption === 'container'}
                    onChange={handleTrackingOptionChange}
                  />
                  Container / Bill of Lading Number
                </label>
                <label>
                  <input
                    type="radio"
                    value="booking"
                    checked={trackingOption === 'booking'}
                    onChange={handleTrackingOptionChange}
                  />
                  Booking Number
                </label>
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search..." />
              </div>
            </>
          )}
          {selectedTab === 'schedules' && (
            <div className="schedules-form">
              <div className="input-group">
                <label>
                  <span role="img" aria-label="From Port">🚢</span>
                  <input
                    type="text"
                    placeholder="From (Port)"
                    value={fromPort}
                    onChange={handleFromPortChange}
                  />
                </label>
                <label>
                  <span role="img" aria-label="To Port">📍</span>
                  <input
                    type="text"
                    placeholder="To (Port)"
                    value={toPort}
                    onChange={handleToPortChange}
                  />
                </label>
              </div>
              <div className="input-group">
                <label>
                  <span role="img" aria-label="Date">📅</span>
                  <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                  />
                </label>
              </div>
              <button className="search-button">Search</button>
            </div>
          )}
          {selectedTab === 'contacts' && (
                    <div className="contacts-form">
                        <div className="search-input">
                            <select
                                value={location}
                                onChange={handleLocationChange}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc'
                                }}
                            >
                                <option value="">Select a location</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                    </div>
                    
                    
                )}
        </div>
      </div>
    );
}

export default SearchBox;
