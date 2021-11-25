const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Sign In</p>
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Username"
          />
        </div>

        <div>
          <button className="w-full py-4 border-2 rounded text-sm font-bold bg-gray-600 hover:bg-gray-900 text-white transition duration-200">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
