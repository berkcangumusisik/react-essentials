function TabButton({ children, onSelect }) {
    function handleClick() {
        onSelect();
    }
    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}

export default TabButton;