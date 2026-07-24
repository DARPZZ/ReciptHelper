import { useNavigate } from "react-router";

export const useHandleNavigation = () => {
  const navigate = useNavigate();
  return (navigationLink: string) => {
    navigate(navigationLink);
  };
};
