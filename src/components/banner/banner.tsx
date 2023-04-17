import "./style.css";
import img from "./assets/banner-img.png";
import { motion } from "framer-motion";

export { Banner };

function Banner(): React.ReactElement {
  return (
    <div className="bg">
      <div className="pt-20 pb-10 md:pt-13 md:justify-evenly justify-center flex">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="my-auto text-center"
        >
          <p className="font-extrabold text-xl text-white uppercase flex-1">
            Hello, I'm a
          </p>
          <p className="text-4xl font-logo bg-clip-text text-transparent letter-bg flex-1">
            Full-Stack
          </p>
          <p className="text-4xl font-logo bg-clip-text text-transparent letter-bg flex-1">
            Developer
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={img} className="hidden lg:block h-80 py-auto" />
        </motion.div>
      </div>
    </div>
  );
}
