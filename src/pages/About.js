import '../styles/global.css'
import '../styles/about.css'
import ModelAbout from '../assets/model-about.jpg'

export default function About() {
  return(
    <main className="main-about">
      <img src={ModelAbout} alt="Foto de Modelo"/>
      <div className="texts-about">
        <h2>Quem somos</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga, labore nemo, fugit rem, illum nisi ducimus dolor quisquam facere ratione. Aut a ullam excepturi consequuntur doloribus. Dolores, dolore ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo tempore ab ducimus soluta nesciunt accusantium labore excepturi magnam numquam, autem enim mollitia illo at architecto quam unde, eveniet hic.</p>
      </div>
    </main>
  );
}