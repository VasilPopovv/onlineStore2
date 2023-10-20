import { useEffect } from "react";
import Styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate(-1);
    }, 3000)
  }, [navigate]);

  return (
    <div className={Styles.error}>
      <strong>404! Page not found!!!</strong>
    </div>
  );
};

export default Error;
