import {calculateInvestmentResults} from "../util/investment.ts";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return <p>Results...</p>
}