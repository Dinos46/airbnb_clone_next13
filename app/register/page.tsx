import Logister from "../components/Logister/Logister.component";

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
