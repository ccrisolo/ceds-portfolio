import "./App.css";
import HomePage from "./Pages/HomePage";
import Cursor from "./components/Cursor/Cursor";

function App() {


    
    const onMouseMove = (e => {
        const cursor = document.querySelector('.cursor')
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
        
        
    });
    
    window.addEventListener("mousemove", onMouseMove)

    return (
        <div
            className='App'
            style={{
                backgroundImage: `url("https://i.imgur.com/2P72dCc.jpg")`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
