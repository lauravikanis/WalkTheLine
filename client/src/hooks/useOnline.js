import { useEffect, useState } from "react";
const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnlineChange = () => {
      setOnline(navigator.onLine);
    };
    window.addEventListener("offline", handleOnlineChange);
    window.addEventListener("online", handleOnlineChange);
    return () => {
      window.removeEventListener("offline", handleOnlineChange);
      window.removeEventListener("online", handleOnlineChange);
    };
  }, []);
  return online;
};
export default useOnline;
