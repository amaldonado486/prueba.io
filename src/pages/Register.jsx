import { useUser } from "../context/UserContext"; 


const Register = () => {
  const { login } = useUser();

  const handleRegister = () => {
    login("token_de_prueba", "test@test.com");
  };

  return (
    <div>
      <h2>Registro</h2>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;
