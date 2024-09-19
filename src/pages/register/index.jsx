import { useContext } from "react";
import CommenForm from "../../components/commen-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";

function RegisterPage() {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setLoading,
  } = useContext(AuthContext);
  console.log(registerFormData);

  const navigate = useNavigate();

  function handleRegisterFormSubmit(event) {
    event.preventDefault();
    registerWithFirebase()
      .then((result) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name,
          }).then(() => {
            console.log(
              auth.currentUser.displayName,
              "auth.currentUser.displayName"
            );
            if (auth.currentUser.displayName) {
              setLoading(false);
              navigate("/profile");
            }
          });
          // navigate("/profile");
        }
      })
      .catch((error) => console.log(error));
  }
  // if (loading) return <h1>Loading! please wait</h1>;
  // if (user) navigate("/profile");

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Register Page</p>
        <CommenForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
          buttonText={"Save"}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
