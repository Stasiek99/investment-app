import { useState } from "react";

export function useInvestmentInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier: string, newValue: string) {
        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }));
    }

    return { userInput, handleChange, inputIsValid };
}