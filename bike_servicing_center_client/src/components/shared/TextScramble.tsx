"use client"
import { useEffect, useRef, useState } from "react";

const ScrambleText = ({ text, speed = 50, duration = 800 }: { text: string, speed?: number, duration?: number }) => {
    const [displayed, setDisplayed] = useState(text);
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLSpanElement | null>(null)

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?~`<>≈≠∑∆π∞♥★☆";

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            })
        }, {threshold: 1})

        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return;

        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;

            if (elapsed > duration) {
                setDisplayed(text);
                clearInterval(interval)
                return
            }

            const scramble = text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join("")

            setDisplayed(scramble)
        }, speed)

        return () => clearInterval(interval)
    }, [speed, duration, text, chars, isVisible])

    return (

        <span ref={ref}>{displayed}</span>
    );
};

export default ScrambleText;
