import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        setProfile(response.data);
        setUpdatedProfile(response.data);
      })
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  const handleChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(updatedProfile);
    setEditing(false);
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {editing ? (
        <div className="space-y-4">
          <input type="text" name="name" value={updatedProfile.name} onChange={handleChange} className="w-full p-2 border" />
          <input type="email" name="email" value={updatedProfile.email} onChange={handleChange} className="w-full p-2 border" />
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <button onClick={() => setEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
