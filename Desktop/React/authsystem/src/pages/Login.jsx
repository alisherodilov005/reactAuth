import { useState  } from "react";
import { useAuth } from "../hooks/AuthProvider";
const Login = () => {
  const auth = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const login = () => {
   auth.loginAction(input)
   return ;
  };
  const handleSubmitEvent = ()=>{
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
  }
  return (
    <div className="row p-5">
      <div className="col-md-6">
        <h1>LOGIN PAGE</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          repellendus ea libero exercitationem non earum eum corrupti nostrum
          consequatur, eius molestiae tempore id laborum aspernatur dolores
          labore facere aliquam sunt.
        </p>
      </div>
      <div className="col-md-6">
        <label>Login</label>
        <form onSubmit={handleSubmitEvent}>
          <input
            type="text"
            name="email"
            onChange={handleInput}
            className="form-control"
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            className="form-control"
          />
          <button className="btn btn-primary mt-3" type="button" onClick={login}>
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
