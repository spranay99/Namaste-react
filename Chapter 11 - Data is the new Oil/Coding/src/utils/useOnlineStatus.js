import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [checkStatus, setCheckStatus] = useState(true);
  useEffect(() => {
    checkOnlineStatus();
  }, []);

  const checkOnlineStatus = () => {
    window.addEventListener("offline", () => {
      setCheckStatus(false);
    });
    window.addEventListener("online", () => {
      setCheckStatus(true);
    });
  };
  return checkStatus;
};

export default useOnlineStatus;
