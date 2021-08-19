import React from "react";
import LottieAnimation from "../components/Lottie/LottieAnimation";
import HomeOffice from "../animations/HomeOffice.json";

const HomePage = props => {
    return (
        <>
            <div style={{ zIndex: -1 }}>
                <LottieAnimation
                    lotti={HomeOffice}
                    height={"75vh"}
                    width={"75vw"}
                />
            </div>
        </>
    );
};

export default HomePage;
