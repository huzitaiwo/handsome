import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

// styles
import "./Banner.css";

// images
// import facebook from "../asset/icon/facebook_brand.svg";
import github from "../asset/icon/github-brand.svg";
import instagram from "../asset/icon/instagram-brand.svg";
import linkedin from "../asset/icon/linkedin-brand.svg";
import twitter from "../asset/icon/twitter-brand.svg";
// import facebookLight from "../asset/icon/facebook_brand-light.svg";
import githubLight from "../asset/icon/github-brand-light.svg";
import instagramLight from "../asset/icon/github-brand-light.svg";
import linkedinLight from "../asset/icon/linkedin-brand-light.svg";
import twitterLight from "../asset/icon/twitter-brand-light.svg";
import bannerThumbnail from "../asset/images/web_development.png";

export default function Banner() {
  const { mode } = useTheme();

  return (
    <section className={`banner ${mode}`}>
      <div className="container">
        <div className="container__content">
          <span>&#128075; Welcome!</span>
          <h2>I'm a Frontend Developer and Software Engineer from Nigeria</h2>
          <p>
            Motivated and conscientious individual, passionate about creating
            incredible front-end experiences. I have <small>2 years</small> of
            experience in creating functional high-performing, content-driven,
            optimized websites and web applications
          </p>
          <div className="follow">
            <p>Follow me on:</p>
            <ul className="social-links">
              <li>
                <a href="https://github.com/huzitaiwo">
                  {mode === "light" && <img src={github} alt="github" />}
                  {mode === "dark" && <img src={githubLight} alt="github" />}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/huzi-taiwo-62a7541b3/">
                  {mode === "light" && <img src={linkedin} alt="linked" />}
                  {mode === "dark" && <img src={linkedinLight} alt="linked" />}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/huzitaiwo">
                  {mode === "light" && <img src={twitter} alt="twitter" />}
                  {mode === "dark" && <img src={twitterLight} alt="twitter" />}
                </a>
              </li>
              {/* <li>
                <a href="https://web.facebook.com/profile.php?id=100059340002901">
                  {mode === "light" && <img src={facebook} alt="facebook" />}
                  {mode === "dark" && (
                    <img src={facebookLight} alt="facebook" />
                  )}
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/huzitaiwo/">
                  {mode === "light" && <img src={instagram} alt="instagram" />}
                  {mode === "dark" && (
                    <img src={instagramLight} alt="instagram" />
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <motion.img
          className="banner-thumbnail"
          src={bannerThumbnail}
          alt="banner thumbnail"
          animate={{ y: 15 }}
          transition={{ duration: 2, yoyo: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
