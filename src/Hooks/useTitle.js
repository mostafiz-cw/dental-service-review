import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Soothing Dental`;
  }, [title]);
};

export default useTitle;
