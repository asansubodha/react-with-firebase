import { useContext } from "react";
import CommenForm from "../../components/commen-form";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { Result } from "postcss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  function handleLoginOnSubmit(event) {
    event.preventDefault();
    loginWithFirebase().then((Result) => {
      console.log(Result, "result222");
      if (result) {
        setLoading(false);
        navigate("/profile");
      }
    });
  }

  //   if (loading) return <h1>Loading! Please wait</h1>;
  //   if (user) navigate("/profile");

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h1>Welcome Back</h1>
        <p>Login Page</p>
        <CommenForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onSubmit={handleLoginOnSubmit}
        />
      </div>
    </div>
  );
}

export default LoginPage;
