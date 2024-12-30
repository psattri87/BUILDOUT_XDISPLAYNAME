import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });
  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    setFullName(name.fname + " " + name.lname);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            required
            value={name.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            required
            value={name.lname}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName !== "" && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
