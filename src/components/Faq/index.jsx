"use client";
import { useEffect, useRef } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "How do I create an account?",
    answer:
      'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    id: 2,
    question: "I forgot my password. What should I do?",
    answer:
      'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    id: 3,
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
  {
    id: 4,
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
  {
    id: 5,
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
  {
    id: 6,
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
];

const FaqItem = ({ question, answer, name }) => (
  <div className="collapse rounded-none border-b border-custom-border mb-4 bg-brand-dark">
    <input type="radio" name={name} />
    <div className="collapse-title font-founders font-medium text-white">
      {question}
    </div>
    <div className="collapse-content font-founders font-light text-sm text-custom-textSecondary">
      {answer}
    </div>
  </div>
);

export default function Faq() {
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        // Uncheck all radio inputs to close accordion
        const radioInputs = accordionRef.current.querySelectorAll(
          'input[type="radio"]'
        );
        radioInputs.forEach((input) => (input.checked = false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="faq"
      className="container mx-auto px-4 py-12 max-w-6xl bg-brand-dark"
    >
      <h2 className="font-founders text-2xl font-medium text-center mb-8 text-brand-goldDark">
        Frequently Asked Questions
      </h2>
      <div ref={accordionRef}>
        {FAQ_DATA.map((faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            name="my-accordion-1"
          />
        ))}
      </div>
    </div>
  );
}
