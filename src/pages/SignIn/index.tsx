//COmponents
import LoginCard from "../../components/molecules/LoginCard";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function SignIn() {
  return (
    <div className="base-page sign-in-container">
      <LoginCard
        handleSubmit={(what) => {
          console.log(what);
        }}
      />
    </div>
  );
}

export default SignIn;
