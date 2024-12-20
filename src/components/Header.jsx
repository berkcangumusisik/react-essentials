import ReactImage from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const randomDescription = reactDescription[getRandomInt(2)];
    return (
        <header>
            <img src={ReactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {randomDescription} of React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;
