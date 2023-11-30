import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    console.log(JSON.stringify(account));
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };

  useEffect(() => {
    // fetchAccount();
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  return (
    <div className="w-50 m-4">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control mt-2 mb-2"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control mt-2 mb-2"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control mt-2 mb-2"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control mt-2 mb-2"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control mt-2 mb-2"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-control mt-2 mb-2"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100  mt-2 mb-2" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100  mt-2 mb-2" onClick={signout}>
            Signout
          </button>
          <Link to="/kanbas/users" className="btn btn-warning w-100 mt-2 mb-2">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
