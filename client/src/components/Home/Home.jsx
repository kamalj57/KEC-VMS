import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Ho from "./Home.module.css";
import Loader from "../Loader/Loader";
import Bus from "../../assets/bus1.png";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Play the bus honk sound when component mounts
    }, 1500);
  }, []);

  const animateHeader = () => {
    const header = document.querySelector(".animateheader");
    const splitText = new SplitText(header, { type: "chars, words" });
    const chars = splitText.chars;

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.05,
      ease: "back.out",
      duration: 1,
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      {loading ? (
        <Loader loading={loading} size={100} />
      ) : (
        <div className={Ho.main1}>
          <Navbar />
          <img src={Bus} alt="bus" className={Ho.img1} />
          <div className={Ho.main}>
            <h1 className={Ho.animateheader}>
              <span3 className={Ho.span1}>Kongu</span3> Engineering College
              Vehicle <span6>Management</span6> System
            </h1>
            <p>To View the details of all the vehicles present in KEC</p>
            <Link className={Ho.drive} to="driver">
              Driver Details
            </Link>
            <div className={Ho.busd} data-aos="fade-right" data-aos-delay="500">
              <h1>
                KEC <span3>Total</span3> Vehicles <span3>Details</span3>
              </h1>
              <p>
                Kongu Engineering College, nestled in the serene town of
                Perundurai, Erode, is a bustling hub of academic excellence and
                vibrant campus life. Within its grounds, a diverse array of
                vehicles can be spotted catering to various needs. To the
                steadfast student buses lining up in organized queues, ensuring
                timely transportation for students commuting from distant
                corners of the region, water lorries and other vehicles . Each
                vehicle plays a vital role in the daily rhythm of life at Kongu
                Engineering College, embodying the institutions efficiency,its
                endeavors
              </p>
              <div className={Ho.bud1}>
                <div className={Ho.bud2}>
                  <h3>Total Buses</h3>
                  <h1>72</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>Total Cars</h3>
                  <h1>36</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>Total Vans</h3>
                  <h1>13</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>Total Lorries</h3>
                  <h1>6</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={Ho.deg}>
            <p>
              Designed and developed by{" "}
              <a href="https://calibertech.netlify.app/">Caliber Tech</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
