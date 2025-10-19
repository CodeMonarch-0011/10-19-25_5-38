import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Looking Ahead</span>
      <div className="looking-ahead-txt">
        Harrington’s evolution toward directing and producing suggests a second
        act that keeps him central to television storytelling, not only as an
        actor but as a creative force behind series development. Whether
        returning to stage work, leading new pilots, or directing across drama
        and comedy, his steady craft and collaborative reputation make him a
        valued collaborator for future projects.
      </div>
      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
