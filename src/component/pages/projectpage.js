import React from "react";
import '../style.css';
import { motion } from "framer-motion";

export default function projectPage() {
    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type:'keyframes' }}
        >
            <div className="about">
                Hellow
            </div>
        </motion.div>
    );
}