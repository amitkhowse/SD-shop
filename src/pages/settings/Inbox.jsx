import { useEffect, useState } from "react";
import axios from "axios";

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then(response => setMessages(response.data))
      .catch(error => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 border p-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <ul>
            {messages.map(msg => (
              <li key={msg.id} className="p-2 border-b cursor-pointer hover:bg-gray-100" onClick={() => setSelectedMessage(msg)}>
                {msg.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 border p-4">
          {selectedMessage ? (
            <div>
              <h2 className="text-lg font-semibold">{selectedMessage.name}</h2>
              <p className="text-gray-600">{selectedMessage.body}</p>
              <p className="text-sm text-gray-500">Email: {selectedMessage.email}</p>
            </div>
          ) : (
            <p>Select a message to view</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
