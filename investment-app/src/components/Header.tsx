import logo from "../assets/accounting-logo.png";

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo showing a calculator" />
            <h1>Investment Calculator</h1>
        </header>
    );
}