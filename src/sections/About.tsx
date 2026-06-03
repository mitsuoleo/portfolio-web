import { Section } from "../components/Section";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Perfil"
      index="03"
      title="Estudo engenharia de software com foco em backend e aprendizado consistente."
      description="Meu objetivo agora é conquistar o primeiro estágio em tecnologia, contribuindo com base técnica, comunicação clara e disposição real para aprender em equipe."
    >
      <div className="grid gap-5 text-base leading-8 text-muted md:grid-cols-[0.95fr_1.05fr]">
        <p className="border-l-2 border-accent pl-5 text-ink">
          Tenho direcionado meus estudos para Python, orientação a objetos, Git e fundamentos de backend. Gosto de
          transformar desafios de curso em projetos públicos, porque isso me ajuda a praticar leitura de requisitos,
          organização de código e evolução incremental.
        </p>
        <p>
          Além da parte técnica, trago uma base interpessoal forte: colaboração, organização, fala em público e inglês
          avançado. Quero somar em um time que valorize aprendizado, responsabilidade e construção bem-feita.
        </p>
      </div>
    </Section>
  );
}
