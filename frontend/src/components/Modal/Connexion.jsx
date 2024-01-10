import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Modal } from "react-responsive-modal";
import useUser from "../../contexts/UserContext";
import "react-responsive-modal/styles.css";
import "./connexion.css";
import ModalSignup from "./Signup";

function Connexion() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const email = useRef();
  const password = useRef();

  const [openSignup, setOpenSignup] = useState(false);
  const createSignup = () => setOpenSignup(true);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        setUser(user);
        navigate("/");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container_inscription">
      <form className="monlogin">
        <h2 className="titre_login">Vous avez déjà un compte?</h2>
        <div>
          <p className="titre_email">Votre adresse e-mail</p>
          <input
            className="input_login"
            id="mailConnection"
            name="mail"
            type="mail"
            placeholder="email@gmail.com"
            ref={email}
            required
          />
          <p className="titre_email">Votre mot de passe</p>
          <div className="imput">
            <input
              id="passwordConnection"
              name="password"
              ref={password}
              type={passwordVisible ? "text" : "password"}
              className="input_login"
              required
            />
            <div
              onClick={() => setPasswordVisible((prevState) => !prevState)}
              className="text_visible"
              onKeyDown={() => setPasswordVisible((prevState) => !prevState)}
              tabIndex="0"
              role="button"
            >
              {passwordVisible ? (
                <Icon icon="gridicons:not-visible" width="20" />
              ) : (
                <Icon icon="gridicons:visible" width="20" />
              )}
            </div>
          </div>
        </div>
        <div className="box_connexion">
          <button type="button" className="bout_login" onClick={handleSubmit}>
            connectez-vous
          </button>
        </div>
      </form>
      <form className="monlogin">
        <h2 className="titre_login">Vous n'etes pas encore inscrit?</h2>
        <center>Créez gratuitement votre compte </center>
        <div className="box_connexion">
          <button type="button" className="bout_signup" onClick={createSignup}>
            Créer un compte
          </button>
        </div>
      </form>
      <Modal open={openSignup} onClose={() => setOpenSignup(false)} center>
        <ModalSignup />
      </Modal>
    </div>
  );
}
export default Connexion;
