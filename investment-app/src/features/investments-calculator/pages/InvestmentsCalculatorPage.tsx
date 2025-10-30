import {useInvestmentInput} from "../hooks/useInvestmentInput.ts";
import Header from "../components/Header.tsx";
import UserInput from "../components/UserInput.tsx";
import Results from "../components/Results.tsx";

export default function InvestmentsCalculatorPage() {
    const {userInput, handleChange, inputIsValid} = useInvestmentInput();

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            {!inputIsValid && (
                <p className="center">Please enter a duration greater than zero</p>
            )}
            {inputIsValid && <Results input={userInput} />}
        </>
    );
}