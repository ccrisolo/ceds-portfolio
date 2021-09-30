import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Parallax from "react-rellax";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import HomeOffice from "./animations/HomeOffice.json";
import Desk from "./animations/Desk.json";
import developer from "./animations/developer.json";
import Portfolio from "./animations/Portfolio.json";
import Task from "./animations/Task.json";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <>
            <div className='App'>
                <div className='nav-bar'>
                    <NavBar />
                </div>
                <div className='intro'>
                    <h1>Hi there! I'm Cedric.</h1>
                    <p>
                        I'm a passionate Frontend Web and Mobile App Developer
                        with experience utilizing JavaScript, React, React
                        Native, Redux in addition to other modern libraries and
                        frameworks.
                    </p>
                </div>
                <div className='illustration-1'>
                    <LottieAnimation lotti={developer} />
                </div>
                <div className='projects-section'>
                    <h2>This will be the projects section</h2>
                    <div className='illustration-2'>
                        <LottieAnimation lotti={Portfolio} />
                    </div>
                </div>
                <div className='education-section'>
                    <h2>This will be the education section</h2>
                    <div className='illustration-3'>
                        <LottieAnimation lotti={Desk} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
