import { Link } from "@mui/material";
import "./App.css";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <main id="layout" className="gap-24">
        <section id="home">
          <h1 className="text-xl font-bold highlight-color uppercase">
            Olá, meu nome é Tiago
          </h1>
          <h1 className="text-8xl font-semibold mt-1">Este é meu portfolio.</h1>
          <p className="text-2xl font-light mt-10">
            Sou estudante de Sistemas de Informação na PUCPR e busco construir
            aplicações interativas e inovadoras.
            <br></br>
            Gosto de desafios e sou motivado pela minha curiosidade.
          </p>
        </section>
        <section className="grid grid-cols-2 gap-x-20" id="contato">
          <div className="shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)] rounded-xl">
            <CodeBlock />
          </div>
          <div className="text-xl flex flex-col gap-y-4">
            <h2 className="highlight-color uppercase tracking-wider hover:tracking-widest transition-all size-fit">
              Fale comigo
            </h2>
            <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className="hover:tracking-wide transition-all"
            >
              bptiago123@gmail.com
            </Link>
            <Link
              href="https://github.com/bptiago"
              underline="hover"
              color="textPrimary"
              className="hover:tracking-wide transition-all"
            >
              github.com/bptiago
            </Link>
            <Link
              href="https://www.linkedin.com/in/bptiago/"
              underline="hover"
              color="textPrimary"
              className="hover:tracking-wide transition-all"
            >
              linkedin.com/in/bptiago/
            </Link>
          </div>
        </section>
        <section id="projetos">
          <h1 className="lowercase text-center secondary-color font-semibold text-3xl mb-3">
            <span className="tertiary-color text-3xl">/</span>projetos
          </h1>
          <p className="text-center tertiary-color text-lg font-thin">
            Algumas coisas que construí no passado...
          </p>
          <div className="grid grid-cols-auto mt-16">
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
