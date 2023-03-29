import { motion } from "framer-motion";
export const DetailPage = () => {
  return (
    <motion.div
      className="w-screen h-screen bg-bgBlue"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition : {duration : .3} }}
    ></motion.div>
  );
};
export default DetailPage;
