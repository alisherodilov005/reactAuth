import { AuthContext, useAuth } from "../hooks/AuthProvider";
import { useContext, useEffect, useState } from "react";

const DashboardTop = () => {
  const [user, setUser] = useState(null);
  const data = useContext(AuthContext);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      });
      let res = await response.json();
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
