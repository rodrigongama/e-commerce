import '../styles/home.css';
import Model1 from '../assets/woman1.jpg';
import Model2 from '../assets/woman2.jpg';

export default function Home() {
  return (
    <main>
      <div className="photo1"></div>

      <div className="subtitle-home">
        <h2>
          ENCONTRE AS PEÇAS PARA FAZER AS <br /> PAZES COM SEU GUARDA-ROUPA
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          tempora quia debitis a voluptates. Nihil hic corporis sint nesciunt
          sequi officia, consequatur pariatur accusantium eum iusto autem
          deleniti tempore ex! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vero repudiandae cum nam.
        </p>
      </div>

      <section className="section-fotos">
        <div className="buttons-model">
          <img
            className="model1 transition"
            src={Model1}
            alt="Foto da Modelo 1"
          />

          <div className="buttons button1">
            <p>ENCONTRE OPÇÕES de camisas brancas atemporais</p>

            <a href="/">
              <button>OPÇÃO 01</button>
            </a>

            <a href="/">
              <button>OPÇÃO 02</button>
            </a>

            <a href="/">
              <button>OPÇÃO 03</button>
            </a>
          </div>
        </div>

        <div className="buttons-model2">
          <div className="buttons button2">
            <p>ENCONTRE a calça skinny que você vai usar muito!</p>
            <a href="/">
              <button>OPÇÃO 01</button>
            </a>

            <a href="/">
              <button>OPÇÃO 02</button>
            </a>

            <a href="/">
              <button>OPÇÃO 03</button>
            </a>
          </div>

          <img
            className="model2 transition"
            src={Model2}
            alt="Foto da Modelo 2"
          />
        </div>
      </section>
    </main>
  );
}
