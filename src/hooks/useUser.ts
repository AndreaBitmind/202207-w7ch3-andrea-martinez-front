import { ProtoUser } from "../store/features/robots/model/User";

const useUser = () => {
  const url = process.env.RECT_APP_BASE_URL as string;

  const register = async (userData: ProtoUser) => {
    const response = await fetch(`${url}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    await response.json();
  };

  return { register };
};

export default useUser;
