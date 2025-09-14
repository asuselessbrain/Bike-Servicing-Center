"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ target, duration = 2500 }: { target: number, duration: number }) => {

    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            })
        }, { threshold: 0.5 })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;

        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                start = target;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 16)
        return () => clearInterval(timer)

    }, [target, duration, isVisible]);
    return (
        <motion.span
            ref={ref}
            className="text-4xl sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {count.toLocaleString()} +
        </motion.span>
    );
};

export default Counter;