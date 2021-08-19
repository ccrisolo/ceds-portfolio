import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Parallax from "react-rellax";
import LottieAnimation from "./components/Lottie/LottieAnimation";
import HomeOffice from "./animations/HomeOffice.json";
import Desk from "./animations/Desk.json";
import developer from './animations/developer.json'
import laptop_coffee from './animations/laptop_coffee.json'

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
                <div className='left-side'>
                    <h1>Cedric's Portfolio</h1>
                    <Parallax speed={-8}>
                        <p>This is my website</p>
                    </Parallax>
                    <Parallax speed={-6}>
                        <p>Hopefully it will look great once I'm done</p>
                    </Parallax>
                    <Parallax speed={-4}>
                        <p>Let's keep this moving forward</p>
                    </Parallax>
                </div>
                <Cursor />
                <div className='right-side'>
                    <Parallax speed={-10}>
                        <LottieAnimation
                            lotti={laptop_coffee}
                            height={750}
                            width={750}
                        />
                    </Parallax>
                </div>
            </div>
            <div className='projects-section'>
                <h2>This will be the projects section</h2>
                <Parallax speed={-2}>
                    <div className='right-side'>
                        <LottieAnimation
                            lotti={developer}
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
