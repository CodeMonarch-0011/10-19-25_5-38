import "../../styles/home.css";
import { Data } from "../../static-contents/rise-to-prominence";

function RiseToProminenceCard({ hdr, content }) {
  return (
    <div className="rise-to-prominence-card">
      <div className="pointer" />
      <div>{hdr}</div>
      <div>{content}z</div>
    </div>
  );
}

export function RiseToProminence() {
  return (
    <section className="rise-to-prominence">
      <span className="rise-to-prominence-hdr">Rise to Prominence</span>

      <div className="rise-to-prominence-txt">
        Jay Harrington’s profile rose significantly when he took on lead and
        co-lead roles in a series of television comedies and dramas that
        showcased different facets of his skill set.Across these projects,
        Harrington transformed from a talented guest actor into a reliable
        series lead able to handle action, character nuance, and comedic timing
        in equal measure.
      </div>

      <div className="rise-to-prominence-list">
        {Data.map((dt, i) => (
          <RiseToProminenceCard key={i} hdr={dt.hdr} content={dt.content} />
        ))}
      </div>
    </section>
  );
}
