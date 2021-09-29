import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Parallax from "react-rellax";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import HomeOffice from "./animations/HomeOffice.json";
import Desk from "./animations/Desk.json";
import developer from './animations/developer.json'
import Portfolio from './animations/Portfolio.json'
import Task from './animations/Task.json'
import NavBar from './components/NavBar/NavBar'

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
        <>
            <div className='App'>
                <NavBar />
                <div className='left-side'>
                    <h1>Cedric's Portfolio</h1>
                        <p>Hi there! I'm Cedric.</p>
                        <p>I'm a passionate Frontend Web and Mobile App Developer
                            with experience utilizing JavaScript, React, React Native, Redux 
                            in addition to other modern libraries and frameworks.  
                        </p>
                        <p>Let's keep this moving forward</p>
                </div>
                <Cursor />
                <div className='right-side'>
                    <Parallax speed={-5}>
                        <LottieAnimation
                            lotti={developer}
                            height={750}
                            width={750}
                        />
                    </Parallax>
                </div>
            </div>
            <div className='projects-section'>
                <h2>This will be the projects section</h2>
                <Parallax speed={-5}>
                    <div className='right-side'>
                        <LottieAnimation
                            lotti={Portfolio}
                            height={500}
                            width={500}
                        />
                    </div>
                </Parallax>
            </div>
            <div className='education-section'>
                <h2>This will be the education section</h2>
                <Parallax speed={-5}>
                    <div className='right-side'>
                        <LottieAnimation
                            lotti={Desk}
                            height={500}
                            width={500}
                        />
                    </div>
                </Parallax>
            </div>
        </>
    );
}

export default App;
