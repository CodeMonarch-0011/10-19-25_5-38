import "../../styles/home.css";
import image from "/images/jay-harrington-3.webp";

export function EarlyCareer() {
  return (
    <section className="early-career">
      <span className="early-career-hdr">Early Career</span>
      <div className="early-career-txt">
        Harrington’s entry into screen work was typical of many working actors:
        a progression of guest appearances on established series and roles in
        modest studio films. Early television credits included episodic
        appearances that showcased his affability and timing, while stage work
        kept him grounded in live performance disciplines. This blend of stage
        discipline and camera experience made him adaptable and reliable — a
        quality casting directors noticed. <br />
        His breakthrough in broader public awareness came with projects that
        allowed him to carry a narrative: smart, character-driven comedies and
        ensemble dramas where his instincts for detail and human nuance could
        shine. These roles began to define Harrington not by star wattage but by
        a dependable leading presence audiences trusted.
      </div>

      <img src={image} />
    </section>
  );
}
