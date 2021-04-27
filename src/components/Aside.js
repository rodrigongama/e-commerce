import IconFace  from '../assets/icon-face.png'
import IconInsta  from '../assets/icon-insta.png'
import IconYoutube from '../assets/icon-ytb.png'

import '../styles/global.css';

export default function Aside() {
  return (
    <aside className="asideHome">
      <a href="/"><img src={IconYoutube} alt="Icone do Youtube" /></a>
      <a href="/"><img src={IconInsta} alt="Icone do Instagram" /></a>
      <a href="/"><img src={IconFace} alt="Icone do Facebook" /></a>
    </aside>
  );
}
