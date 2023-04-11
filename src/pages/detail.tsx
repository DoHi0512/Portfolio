import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { PageState } from "./_app";
import { useEffect } from "react";
export const Detail = () => {
  const [page, setPage] = useRecoilState(PageState);
  useEffect(() => {
    setPage(2);
  }, []);
  return (
    <motion.div
      className="w-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 0.6 } }}
    >
      
    </motion.div>
  );
};

export default Detail;
