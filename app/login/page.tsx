import Logister from "../components/Logister/Logister";

const UserLogIn = () => {
  return (
    <main className="container">
      <Logister formVals={{ email: "", password: "" }} type="login" />
    </main>
  );
};

export default UserLogIn;
