import { ComponentPropsWithoutRef } from "react";

type CardProps = {
  title: string;
  location: string;
  duration: string;
  description: string;
} & ComponentPropsWithoutRef<"div">;

function ActivityCard(props: CardProps) {
  return (
    <div
      className="w-4/5 mx-auto transition-shadow shadow-md hover:shadow-lg p-6 border-t-4 rounded-xl mt-14"
      style={{
        borderColor: "#1976d2",
        transition: "all",
        transitionDuration: "0.3s",
      }}
    >
      <h2 className="font-semibold text-lg">{props.title}</h2>
      <div className="">{props.location}</div>
      <div className="tertiary-color mb-4">{props.duration}</div>
      <p>{props.description}</p>
    </div>
  );
}

const data = [
  {
    title: "Monitoria Acadêmica",
    location: "Pontifícia Universidade Católica do Paraná",
    duration: "Agosto/2024 - Atual",
    description: `Auxiliar estudantes nas disciplinas de Programação Orientada a Objetos 
    e Banco de Dados. São ensinados conceitos referentes a arquitetura orientada a objetos, 
    Java, MySQL e modelagem e criação de banco de dados relacional.`,
  },
  {
    title: "Estagiário de Tecnologia",
    location: "Tribunal de Justiça do Paraná",
    duration: "Maio/2023 - Dez/2023",
    description: `Prestação de suporte técnico remoto aos usuários do Tribunal,
        desenvolvendo uma comunicação eficaz, habilidades de organização e
        competências de resolução de problemas. Ademais, foi realizada
        documentação de sistemas, descrevendo problemas sofridos pelos usuários
        e buscando propor soluções eficazes.`,
  },
];

export default function ActivityCards() {
  return (
    <>
      {data.map((card, i) => (
        <ActivityCard
          key={i}
          title={card.title}
          location={card.location}
          duration={card.duration}
          description={card.description}
        />
      ))}
    </>
  );
}
