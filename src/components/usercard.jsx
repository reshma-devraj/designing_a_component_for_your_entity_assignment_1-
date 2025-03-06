// write the component code here
import React from "react";

const UserCard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100"; // Dummy image
  const name = "reshma";
  const email = "reshma@example.com";
  const phone = "+1 666 666 6666";
  const address = "home";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Email:</strong> {email}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phone}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

// CSS styles as a JavaScript object
const styles = {
  card: {
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    margin: "10px 0",
    fontSize: "20px",
    color: "#333",
  },
  detail: {
    fontSize: "14px",
    color: "#666",
  },
};

export default UserCard;
