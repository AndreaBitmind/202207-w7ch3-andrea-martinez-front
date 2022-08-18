import { SyntheticEvent, useState } from "react";
import useUser from "../../features/users/hooks/useUser";

const Register = (): JSX.Element => {
  const { register } = useUser();
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
    image: "",
  });

  const formData = new FormData();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    register(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLFormElement>) => {
    formData.append("image", event.target.files[0]);

    setFormData({ ...formData, [event.target.id]: event.target.value });
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
            value={formData.userName}
          />
        </div>
        <div>
          <label htmlFor="passWord">Password:</label>
          <input
            type="password"
            required
            onChange={handleChange}
            id="passWord"
            value={formData.passWord}
          />
          <input
            type="file"
            name="image"
            required
            onChange={handleChangeFile}
            value={formData.image}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
