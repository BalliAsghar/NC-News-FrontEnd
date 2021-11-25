import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/User.Context";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  if (!user) return <Navigate to={"/"} />;

  return (
    <div className="flex flex-auto content-center justify-center mt-9">
      <div className="max-w-xs rounded overflow-hidden shadow-xl">
        <img className="w-full" src={user.user.avatar_url} alt="Profile" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900">
            {user.user.name}
          </div>
          <div className="font-bold text-xs mb-2 -mt-2 text-gray-600">
            @{user.user.username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
