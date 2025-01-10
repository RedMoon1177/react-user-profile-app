import React, { useState } from "react";
import Profile from "./Profile";

const ProfilesList = ({ usersList }) => {
  const [currentUsersList, setCurrentUsersList] = useState(usersList);

  const userDelete = (id) => {
    const newUserList = currentUsersList.filter((u) => u.id !== id);
    setCurrentUsersList(newUserList);
  };

  return (
    <div>
      {currentUsersList?.map((user, index) => (
        <Profile
          key={index}
          name={user.name}
          job={user.job}
          ava={user.ava}
          onDelete={() => userDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default ProfilesList;
