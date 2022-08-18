import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser";

const Register = (): JSX.Element => {
  const { register } = useUser();
  const [loginformData, setFormData] = useState({
    userName: "",
    passWord: "",
    image: "",
  });

  const formData = new FormData();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    register(loginformData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...loginformData, [event.target.id]: event.target.value });
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);

    setFormData({ ...loginformData, [event.target.id]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User:</label>
          <input
            type="text"
            required
            autoComplete="off"
            onChange={handleChange}
            id="userName"
            value={loginformData.userName}
          />
        </div>
        <div>
          <label htmlFor="passWord">Password:</label>
          <input
            type="password"
            required
            onChange={handleChange}
            id="passWord"
            value={loginformData.passWord}
          />
          <input
            type="file"
            name="image"
            required
            onChange={handleChangeFile}
            value={loginformData.image}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
