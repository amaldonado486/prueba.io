
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;

