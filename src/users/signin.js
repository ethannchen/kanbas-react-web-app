import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    const res = await client.signin(credentials);
    console.log(res);
    navigate("/Kanbas/Account");
  };
  return (
    <div className="w-50 m-4">
      <h1>Signin</h1>
      <input
        className="form-control mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        className="form-control mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button className="btn btn-primary" onClick={signin}>
        {" "}
        Signin{" "}
      </button>
      <div className="text-secondary mt-3">
        For testing: username: "iron_man", password: "stark123"{" "}
      </div>
    </div>
  );
}
export default Signin;
