import React from "react";
import Card from "./Card";
import "./Profile.css";

const Profile = ({ name, job, ava, onDelete }) => {
  return (
    <Card>
      <img
        src={ava}
        alt="avatar_pic"
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />
      <div>
        <h3>Name: {name}</h3>
        <p style={{ fontSize: "18px" }}>Job: {job}</p>
      </div>
      <img
        className="delele-btn"
        src="/assets/delete.svg"
        alt="Delete Icon"
        style={{
          marginTop: "20px",
          width: "24px",
          height: "24px",
        }}
        onClick={onDelete}
      />
    </Card>
  );
};

export default Profile;
