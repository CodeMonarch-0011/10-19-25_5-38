import "../../styles/home.css";
import image from "/images/jay-harrington-2.jpeg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Legacy & Impact</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          Jay Harrington’s career exemplifies the working actor’s model:
          consistent, craft-driven, and adaptable. He may not always be the
          flashiest name on a poster, but his body of work demonstrates
          durability and a rare combination of comedic timing and dramatic
          weight. His long run on a mainstream procedural combined with cult
          comedy hits has created a cross-sectional audience that appreciates
          his versatility. As he moves into directing and producing, Harrington
          is broadening his creative influence and setting a path for sustained
          contribution to television storytelling.
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
