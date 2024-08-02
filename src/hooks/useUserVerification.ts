import { useEffect } from "react";
import { useMatches, useNavigate } from "react-router-dom";

const useUserVerification = () => {
  const navigate = useNavigate();
  const matches = useMatches();

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (matches.length === 1 && user) {
      navigate("/dashboard");
    } else if (matches.length === 1 && !user) {
      navigate("/login");
    }
  }, [navigate, matches.length, user]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return;
};

export default useUserVerification;
