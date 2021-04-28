import Model1 from '../assets/woman1.jpg';
import Model2 from '../assets/woman2.jpg';

import ReactSwipe from 'react-swipe';
import '../styles/global.css';
import '../styles/home.css';

export default function Home() {
  let reactSwipeEl;
  let reactSwipeElement;

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

      <section className="section-models">
        <div className="buttons-model">
          <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false, speed: 2000 }}

          ref={el => (reactSwipeEl = el)}
          >
            <div>
              <img
                className="model"
                src={Model1}
                alt="Foto da Modelo 1"
              />
            </div>
            <div>
              <img
                className="model"
                src={Model2}
                alt="Foto da Modelo 2"
              />
            </div>
          </ReactSwipe>

          <div className="buttons button1">
            <p>ENCONTRE OPÇÕES de camisas brancas atemporais</p>
            
            <button onClick={() => reactSwipeEl.prev()}>OPÇÃO 01</button>
            <button onClick={() => reactSwipeEl.next()}>OPÇÃO 02</button>
                        
          </div>
        </div>

        <div className="buttons-model2">
          <div className="buttons button2">
            <p>ENCONTRE a calça skinny que você vai usar muito!</p>
            
            <button onClick={() => reactSwipeElement.prev()}>OPÇÃO 01</button>
            <button onClick={() => reactSwipeElement.next()}>OPÇÃO 02</button>
          </div>

          <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false, speed: 2000 }}

          ref={element => (reactSwipeElement = element)}
          >
            <div>
            <img
              className="model carousel2"
              src={Model2}
              alt="Foto da Modelo 2"
            />
            </div>
            <div>
            <img
              className="model carousel2"
              src={Model1}
              alt="Foto da Modelo 1"
            />
            </div>
          </ReactSwipe>
        </div>
      </section>
    </main>
  );
}
