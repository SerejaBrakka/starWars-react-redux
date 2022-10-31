import { useLocation } from "react-router";

const UseQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

export default UseQueryParams;
