import { useState, useEffect } from "react";
import Ho from "../Home/Home.module.css";
import Loader from "../Loader/Loader";
import Bus from "../../assets/bus1.png";
import { Link } from "react-router-dom";
import Tamilnav from "../Navbar/Tamilnav";

function Tamil() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
 

  return (
    <div>
      {loading ? (
        <Loader loading={loading} size={100} />
      ) : (
        <div className={Ho.main1}>
          <Tamilnav/>
          <img src={Bus} alt="bus" className={Ho.img1} />
          <div className={Ho.main}>
            <h1 className={Ho.animateheader}>
              <span3 className={Ho.span1}>கொங்கு</span3> பொறியியல் கல்லூரி வாகன{" "}
              <span6>மேலாண்மை</span6> அமைப்பு
            </h1>
            <p>
              கொங்கு பொறியியல் கல்லூரியில் உள்ள அனைத்து வாகனங்களின்
              விவரங்களையும் பார்க்கவும்
            </p>
            <Link className={Ho.drive} to="/driver">
              ஓட்டுநர் விவரங்கள்
            </Link>
            <div className={Ho.busd}>
              <h1>
                கொங்கு பொறியியல் கல்லூரி <span3>மொத்த</span3> வாகன{" "}
                <span3>விபரங்கள்</span3>
              </h1>
              <p>
                கொங்கு பொறியியல் கல்லூரி, அமைதியான நகரமான பெருந்துறை, ஈரோட்டில்
                அமைந்துள்ளது, கல்வித் திறன் மற்றும் துடிப்பான வளாக வாழ்க்கையின்
                பரபரப்பான மையமாகும். அதன் மைதானத்திற்குள், பல்வேறு தேவைகளைப்
                பூர்த்தி செய்யும் பல்வேறு வகையான வாகனங்களைக் காணலாம்.
                ஒழுங்கமைக்கப்பட்ட வரிசையில் வரிசையில் நிற்கும் உறுதியான மாணவர்
                பேருந்துகள், பிராந்தியத்தின் தொலைதூர மூலைகளிலிருந்து பயணிக்கும்
                மாணவர்களுக்கு சரியான நேரத்தில் போக்குவரத்தை உறுதி செய்யும்,
                தண்ணீர் லாரிகள் மற்றும் பிற வாகனங்கள். ஒவ்வொரு வாகனமும் கொங்கு
                பொறியியல் கல்லூரியின் அன்றாட வாழ்க்கைத் தாளத்தில் முக்கியப்
                பங்கு வகிக்கிறது, இது நிறுவனத்தின் செயல்திறனையும் அதன்
                முயற்சிகளையும் உள்ளடக்கியது.
              </p>
              <div className={Ho.bud1}>
                <div className={Ho.bud2}>
                  <h3>மொத்த பேருந்துகள்</h3>
                  <h1>72</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>மொத்த கார்கள்</h3>
                  <h1>36</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>மொத்த வேன்கள்</h3>
                  <h1>13</h1>
                </div>
                <div className={Ho.bud2}>
                  <h3>மொத்த லாரிகள்</h3>
                  <h1>6</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={Ho.deg}>
            <p>
            Designed and developed by{" "}
              <a href="https://calibertech.netlify.app/">Caliber Tech</a>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tamil;
