"use client"

import { motion } from "framer-motion";

const Loading = () => {

    const text = "Loading..."
    return (
        <h1 className="lg:text-7xl md:text-4xl min-h-screen flex items-center justify-center text-3xl font-bold">
            {
                text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            repeat: Infinity,
                            repeatType: "mirror",
                            repeatDelay: 1.2
                        }}
                    >
                        {char}
                    </motion.span>
                ))
            }
        </h1>
    );
};

export default Loading;