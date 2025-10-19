import "../../styles/home.css";
import { Data } from "../../static-contents/film-work";
import image from "/images/jay-harrington-swat.jpg";

function FilmWorkListCard({ hdr, cnt }) {
  return (
    <div className="film-work-list-card">
      <div className="film-work-list-card-hdr">
        <div className="pointer" aria-hidden />
        <span>{hdr}</span>
      </div>

      <div className="film-work-list-card-txt">{cnt}</div>
    </div>
  );
}

export function FilmWork() {
  return (
    <section className="film-work" id="film-work">
      <span className="film-work-hdr">Film, Stage, and Other Work</span>
      <div className="film-work-txt">
        While television has been Harrington’s principal platform, he has
        continued to work in film and theatre — a balance that keeps his
        performances textured and immediate.
      </div>

      <div className="film-work-cnt">
        <div className="film-work-list">
          {Data.map((dt, i) => (
            <FilmWorkListCard key={i} hdr={dt.hdr} cnt={dt.content} />
          ))}
        </div>
        <div className="film-work-cnt-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
