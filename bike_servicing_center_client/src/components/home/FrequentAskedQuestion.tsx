"use client"; // for App Router

import Image from "next/image";
import { useState } from "react";
import ScrambleText from "../shared/TextScramble";

const faqs = [
    {
        question: "How to create an account?",
        answer:
            "To create an account, find the 'Sign up' or 'Create account' button, fill out the form with your personal information, and click 'Create account'. Verify your email if needed, then log in to start using the platform.",
    },
    {
        question: "Have any trust issue?",
        answer:
            "Our focus on providing robust and user-friendly content management ensures that you can manage your content with confidence and achieve your goals with ease.",
    },
    {
        question: "How can I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions to reset your password securely.",
    },
    {
        question: "What is the payment process?",
        answer:
            "We accept multiple payment methods including credit/debit cards, mobile banking, and cash on delivery (if available).",
    },
];

const FrequentAskedQuestion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="my-20">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-0">
                <div className="my-6">
                    <h3 className="text-2xl md:text-4xl lg:text-4xl font-semibold italic"><ScrambleText text="Looking for answers?" /></h3>
                    <div className="h-1 mt-2 w-34 bg-primary"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-10 lg:flex-row lg:justify-between">
                    {/* Left side image */}
                    <div className="w-full lg:w-1/2 relative h-96 flex-1">
                        <Image
                            src="https://res.cloudinary.com/dwduymu1l/image/upload/v1757473160/man-fixing-motorcycle-modern-workshop_gtkjev.jpg"
                            alt="FAQ section"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Right side FAQ */}
                    <div className="w-full lg:w-1/2 flex-1">
                        <div>
                            {/* Accordion */}
                            <div className="divide-y divide-gray-200">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="py-6">
                                        <button
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
                                        >
                                            {faq.question}
                                            <svg
                                                className={`w-5 h-5 transform transition ${openIndex === index ? "rotate-180 text-indigo-600" : ""
                                                    }`}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 8.25L12.414 12.336C11.748 13.003 11.414 13.336 11 13.336C10.586 13.336 10.252 13.003 9.586 12.336L5.5 8.25"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>

                                        {/* Answer */}
                                        {openIndex === index && (
                                            <div className="mt-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentAskedQuestion;
