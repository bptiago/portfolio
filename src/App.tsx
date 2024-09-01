import { Link } from "@mui/material";
import "./App.css";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main id="layout" className="gap-40">
        <section>
          <h1 className="text-xl font-bold highlight-color uppercase">
            HELLO, MY NAME IS TIAGO
          </h1>
          <h1 className="text-8xl font-semibold mt-1">Este é meu portfolio.</h1>
          <p className="text-2xl font-light mt-10">
            Sou estudante de Sistemas de Informação na PUCPR e busco construir
            aplicações interativas e inovadoras.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </section>
        <section className="flex justify-between">
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
              href="#"
              underline="hover"
              color="textPrimary"
              className="hover:tracking-wide transition-all"
            >
              github.com/bptiago
            </Link>
            <Link
              href="#"
              underline="hover"
              color="textPrimary"
              className="hover:tracking-wide transition-all"
            >
              linkedin.com/in/bptiago/
            </Link>
          </div>
          <div className="shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)] rounded-xl">
            <CodeBlock />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
