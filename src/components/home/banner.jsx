import "../../styles/home.css";
import image from "/images/jay-bck.png";
import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>
          Welcome to the World of <br />
          Jay Harrington
        </span>
        <span>
          Jay Harrington is a versatile American actor, producer, and director
          whose career has spanned stage, television, and film. Known for his
          dry comedic timing, steady dramatic presence, and dependable
          leading-man charisma, Harrington has built a reputation as a
          consummate professional who elevates every project he touches. From
          cult comedy favorites to long-running network dramas, his body of work
          displays range — from sharp satire to action-driven ensemble pieces —
          and a steady ascent from character actor to series lead and director.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
