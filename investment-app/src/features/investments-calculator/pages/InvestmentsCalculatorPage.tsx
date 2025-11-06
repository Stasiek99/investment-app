import { useEffect } from "react";

import Header from "../components/Header.tsx";
import UserInput from "../components/UserInput.tsx";
import Results from "../components/Results.tsx";
import { useInvestmentInput } from "../hooks/useInvestmentInput.ts";

export default function InvestmentsCalculatorPage() {
    const {userInput, handleChange, inputIsValid} = useInvestmentInput();

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("../styles.scss", import.meta.url).href;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
            document.body.removeAttribute("style");
            document.body.className = "";
        };
    }, []);

    return (
        <div className="investment-app">
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && (
                <p className="center">Please enter a duration greater than zero</p>
            )}
            {inputIsValid && <Results input={userInput} />}
        </div>
    );
}