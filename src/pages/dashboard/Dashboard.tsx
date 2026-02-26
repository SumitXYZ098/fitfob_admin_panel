import { useEffect } from "react";
import { useAuthStore } from "../../store/auth.store";

const Dashboard = () => {
  const { setSession } = useAuthStore();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setSession(
        JSON.parse(localStorage.getItem("user") || "").jwt,
        JSON.parse(localStorage.getItem("user") || "").user.id,
      );
    }
  }, [setSession]);
  return <div>Dashboard</div>;
};

export default Dashboard;
