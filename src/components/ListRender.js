import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Deyvison", "Silva", "Ghessi", "José"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Deyvison", age: 35 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Pedro", age: 45 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * (users.length + 1));

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
