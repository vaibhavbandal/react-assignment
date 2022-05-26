import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url = "https://reqres.in/api/users?page=1";
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        setUsers(data.data);
      } else {
        setUsers(null);
      }
    }
    fetchData();
  }, []);

  if (!users) return <h4>Loading...</h4>;

  return (
    <>
      <div style={{ border: "1px solid" }}>
        <ul style={{ listStyle: "none" }}>
          {users.map((value, index) => {
            return (
              <li key={index}>
                {value.first_name}
                {value.last_name}
                <button
                  onClick={() => {
                    setUsers(() =>
                      users.filter((value, index1) => index1 !== index)
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
