import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, set, update, remove } from "firebase/database";
import { app } from "../../FireBase";

const db = getDatabase(app);

export default function FirebaseDataBase() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function sendData() {
    set(ref(db, 'users/Krutik'), {
      username: username,
      email: email,
    }).then(() => {
      console.log("Data sent successfully");
      fetchData(); // Fetch the data after sending it
    }).catch((error) => {
      console.error("Error sending data: ", error);
    });
  }

  function updateData() {
    update(ref(db, 'users/Krutik'), {
      username: username,
      email: email,
    }).then(() => {
      console.log("Data updated successfully");
      fetchData(); // Fetch the data after updating it
    }).catch((error) => {
      console.error("Error updating data: ", error);
    });
  }

  function deleteData() {
    remove(ref(db, 'users/Krutik')).then(() => {
      console.log("Data deleted successfully");
      fetchData(); // Fetch the data after deleting it
    }).catch((error) => {
      console.error("Error deleting data: ", error);
    });
  }

  function fetchData() {
    let userRef = ref(db, 'users/Krutik');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setPost(data);
      setLoading(false);
    }, {
      onlyOnce: true
    });
  }

  return (
    <div>
      <h1>FirebaseDataBase</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        post ? (
          <div>
            <h2>Username: {post.username}</h2>
            <h2>Email: {post.email}</h2>
          </div>
        ) : (
          <h2>No Data</h2>
        )
      )}
       <button onClick={sendData}>Create Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
}
