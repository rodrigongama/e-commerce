import '../styles/global.css';
import '../styles/update.css';

export default function Update() {
  return (
    <main>
      <div className="subtitle-update">
        <h2>SUA MARCA PODE SER PARCEIRA DO MPC</h2>
        <p>ENTRE EM CONTATO E SAIBA COMO</p>
      </div>

      <form action="" method="post" id="form-update">
        <label for="name"></label>
        <input
          type="text"
          name="name"
          id="name-update"
          placeholder="Nome"
          required
        />

        <label for="email"></label>
        <input
          type="email"
          name="email"
          id="email-update"
          placeholder="E-mail"
          required
        />

        <label for="socialmedia"></label>
        <input
          type="text"
          name="socialmedia"
          id="socialmedia-update"
          placeholder="Rede Social"
        />

        <label for="description"></label>
        <textarea
          name="description"
          id="description-update"
          placeholder="Descreva sua marca aqui"
          required
        ></textarea>

        <div>
          <button className="button-update" type="submit">
            Enviar
          </button>
        </div>
      </form>

      <div className="paragraph-update">
        <h2>AJUDE-NOS A MANTER O MPC ATUALIZADO</h2>
        <p>
          Viu algum link com a peça esgotada? Avise-nos para atualizarmos por
          opções disponíveis.
        </p>
      </div>
    </main>
  );
}
