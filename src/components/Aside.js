import IconFace  from '../assets/icon-face.png'
import IconInsta  from '../assets/icon-insta.png'
import IconYoutube from '../assets/icon-ytb.png'


export default function Aside() {
  return (
    <aside className="asideHome">
      <a><img src={IconYoutube} alt="Icone do Youtube" /></a>
      <a><img src={IconInsta} alt="Icone do Instagram" /></a>
      <a><img src={IconFace} alt="Icone do Facebook" /></a>
    </aside>
  );
}
