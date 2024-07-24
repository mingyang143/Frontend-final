import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Spinner from "../Components/Spinner";
import { useAuth } from "../Contexts/Hooks/AuthContextHook";
function HomePage() {
  const { isLoginLoading } = useAuth();
  if (isLoginLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.homepage}>
      <section>
        <h1>
          NEED TO BE PRODUCTIVE?
          <br />
          Play Producity now!
        </h1>
        <h2>Producity helps you to prevent producity</h2>
        <Link to="/login" className={styles.cta}>
          Start Game!
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
