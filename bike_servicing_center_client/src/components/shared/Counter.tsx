"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, duration = 2000 }: { target: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            })
        }, { threshold: 0.5 })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let start = 0;

        const increment = target / (duration / 16)

        const time = setInterval(() => {
            start += increment
            if (start >= target) {
                start = target;
                clearInterval(time)
            }
            setCount(Math.floor(start))
        }, 16)

        return () => clearInterval(time)
    }, [isVisible, target, duration, setCount])
    return (
        <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ duration: 0.5 }} className="text-4xl font-semibold">
            {count.toLocaleString()} +
        </motion.span>
    );
};

export default Counter;