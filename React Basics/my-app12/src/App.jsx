import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Light gray background for the page
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: '#ffffff', // White background
    padding: '30px 40px',
    borderRadius: '10px',
    width: '350px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headingStyle = {
    color: '#0000ff', // Blue heading as per screenshot
    marginBottom: '20px',
    fontSize: '22px',
    textAlign: 'center',
    fontWeight: 'normal'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    boxSizing: 'border-box' // Ensure padding doesn't affect total width
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0000ff', // Blue background
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '5px'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
        <h2 style={headingStyle}>Student Registration Form</h2>
        
        <input 
          type="text" 
          placeholder="Student Name" 
          style={inputStyle} 
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          style={inputStyle} 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          style={inputStyle} 
        />
        
        <input 
          type="text" 
          placeholder="Course" 
          style={inputStyle} 
        />
        
        <input 
          type="tel" 
          placeholder="Mobile Number" 
          style={inputStyle} 
        />
        
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
