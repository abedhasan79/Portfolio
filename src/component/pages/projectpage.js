import React from "react";
import '../style.css';
import { motion } from "framer-motion";

export default function projectPage() {
    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 20 }}
        >
            <div>
                Hellow
            </div>
        </motion.div>
    );
}