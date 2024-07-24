import { useAuth } from "../Contexts/Hooks/AuthContextHook";
import LoginCreateUser from "../Components/LoginCreateUser";
import Spinner from "../Components/Spinner";

function ForgetPassword() {
  const { forgetPassword, isLoginLoading } = useAuth();
  if (isLoginLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <LoginCreateUser
        message={"Reset your password now!"}
        onSubmit={forgetPassword}
        type={"forgotPassword"}
        ctaButton={"Send password reset email"}
      />
    </section>
  );
}

export default ForgetPassword;
