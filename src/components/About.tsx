import heroImg from "../assets/portfolio1.jpg";
import { useEffect, useRef } from "react";
import "../App.css";


function About() {
    const imgRef = useRef<HTMLImageElement>(null);

    // 5. IMAGE ROTATION
    useEffect(() => {
        let animationFrameId: number;
        let angle = 0;

        const rotate = () => {
            angle += 0.25;

            // Safely access the DOM node via the ref
            if (imgRef.current) {
                imgRef.current.style.transform = `rotate(${angle}deg)`;
            }

            animationFrameId = requestAnimationFrame(rotate);
        };

        animationFrameId = requestAnimationFrame(rotate);
    });
        return (
            <div className="container">
                {/* ABOUT */}
                <div id="about" className="grid-row">
                    <div className="grid-image-col">
                        {/* Attached the ref here instead of using id="myImage" */}
                        <img
                            ref={imgRef}
                            className="about-icon"
                            src={heroImg}
                            alt="Prathamesh Pal"
                        />
                    </div>

                    <div className="grid-content">
                        <p>
                            I'm Prathamesh Pal - a curious learner who loves exploring how
                            things work in code, math, and life.
                        </p>
                        <p>
                            I enjoy building with <b>Python</b> and <b>JavaScript</b>, and I'm
                            driven by a constant desire to understand, create, and improve.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

export default About