import { useState } from "react";

import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import Results from "./components/Results.tsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier: string, newValue: string) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }

    return (
        <>
            <Header></Header>
            <UserInput userInput={userInput} onChange={handleChange}></UserInput>
            <Results input={userInput}></Results>
        </>
    )
}

export default App
