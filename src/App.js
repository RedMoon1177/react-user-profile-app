import { useState } from "react";
import ProfilesList from "./ProfilesList";
import { usersList } from "./user_data";

function App() {
  const [isDeleteAll, setIsDeleteAll] = useState(false);

  const deleteAllUsers = () => {
    setIsDeleteAll(true);
  };

  return (
    <div style={{ margin: "0 auto", width: "500px" }}>
      <div
        style={{
          marginTop: "80px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align child items to the left
        }}
      >
        <h1>User Profile App</h1>
        {!isDeleteAll && <ProfilesList usersList={usersList} />}
        <button className="btn" onClick={deleteAllUsers}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
