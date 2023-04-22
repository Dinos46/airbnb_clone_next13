import Logister from "../components/Logister/Logister";

const UserRegister = () => {
  return (
    <main className="container">
      <Logister
        formVals={{ email: "", password: "", username: "" }}
        type="register"
      />
    </main>
  );
};

export default UserRegister;
