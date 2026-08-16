import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./css/button.css";
import { PostUserEmail } from "../CostomHook/CostomHook";
export default function Button({ Handleclick }) {
  const Navigate = useNavigate();
  const handleGoogleLogin = async (response) => {
    try {
      const googleToken = response.credential;

      const result = await PostUserEmail({ token: googleToken });

      console.log(result);

      // JWT dari backend
      const token = result.token;

      localStorage.setItem("token", token);

      Navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="box-button">
      <div className="button-masuk">
        <button onClick={Handleclick} className="button-masuk">
          Masuk
        </button>
      </div>
      <div className="atau">
        <p className="atau">Atau</p>
      </div>
      <div className="button-google"></div>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.log("Google Login gagal");
        }}
      />
    </div>
  );
}
