import "./App.css";
import HomePage from "./Pages/HomePage";
import Cursor from "./components/Cursor/Cursor";

function App() {
    const onMouseMove = e => {
        const cursor = document.querySelector(".cursor");
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    };

    const onMouseDown = e => {
        const cursor = document.querySelector(".cursor");
        cursor.style.border = "2px solid grey";
        cursor.style.background = "grey";
    };

    const onMouseUp = e => {
        const cursor = document.querySelector(".cursor");
        cursor.style.border = "";
        cursor.style.background = "";
    };
    const onMouseLeave = e => {
        const cursor = document.querySelector(".cursor");
        cursor.style.display = "none";
    };
    const onMouseEnter = e => {
        const cursor = document.querySelector(".cursor");
        cursor.style.display = "";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    return (
        <div
            className='App'
            style={{
                backgroundImage: `url("https://i.imgur.com/2P72dCc.jpg")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor:'black',
                height: "100vh",
                width: "100vw",
                opacity: "95%",
            }}
        >
            <Cursor />
            <HomePage />
            {/* need Resume, About, Experience, Projects, Contact pages/sections */}
        </div>
    );
}

export default App;
