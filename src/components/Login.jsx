import NewsServiceApi from "../services/api";
import UserContext from "../context/User.Context";
import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (username) => {
    try {
      const user = await NewsServiceApi.login(username);
      setUser(user);
      setRedirect(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        {redirect && <Navigate to="/" />}
        <div className="mb-4">
          <p className="text-gray-600">Sign In</p>
          <h2 className="text-red-500 font-bold">
            {error && <p className="text-red-500">{error}</p>}
          </h2>
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={() => handleSubmit(username)}
            className="w-full py-4 border-2 rounded text-sm font-bold bg-gray-600 hover:bg-gray-900 text-white transition duration-200"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
