import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
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
                zIndex: "-1",
            }}
        >
            <HomePage />
            {/* need Resume, About, Experience, Projects, Contact pages/sections */}
        </div>
    );
}

export default App;
