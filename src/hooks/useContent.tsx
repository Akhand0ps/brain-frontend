import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  const refresh = () => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, { withCredentials: true })
      .then((response) => {
        setContents(response.data.content);
      })
      .catch((error) => {
        console.error("Failed to fetch content:", error);
      });
  };

  useEffect(() => {

    const fetchIfVisible = ()=>{
      if(document.visibilityState==="visible"){
        refresh();
      }
    };

    refresh(); // Initial fetch

    const interval = setInterval(fetchIfVisible, 10 * 1000);

    document.addEventListener("visibilitychange",fetchIfVisible);

    return () => {
      clearInterval(interval); // Cleanup on unmount
      document.removeEventListener("visibilitychange",fetchIfVisible);
    };
  }, []);

  return {contents,refresh};
}
