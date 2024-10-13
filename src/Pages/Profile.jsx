// src/Pages/Profile.jsx
import React, { useState } from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [avatar, setAvatar] = useState(user.avatar);

  const handleAvatarChange = async () => {
    const response = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({ avatar }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } else {
      alert('Failed to update avatar');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <img src={avatar} alt="Avatar" className="avatar" />
      <input
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="New avatar URL"
      />
      <button onClick={handleAvatarChange}>Update Avatar</button>
    </div>
  );
};

export default Profile;
