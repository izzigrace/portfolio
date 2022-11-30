import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2}}}
    >
      <div className="contact">
        CONTACT
      </div>
      <div className="myNumber">
       &#40;509&#41;961-2629
      </div>
      <div className="myEmail">
        izzigrace6@gmail.com
      </div>
    </motion.div>
  );
}

export default Contact;