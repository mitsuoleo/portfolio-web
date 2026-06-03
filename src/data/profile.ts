import { Github, Linkedin, Mail } from "lucide-react";

export const profile = {
  name: "Leonardo Mitsuo Fukuda",
  firstName: "Leonardo Mitsuo",
  lastName: "Fukuda",
  brand: "mitsuo.dev",
  avatarUrl: "https://avatars.githubusercontent.com/u/270778902?v=4",
  role: "Estudante de Análise e Desenvolvimento de Sistemas",
  focus: "Backend / Python / Engenharia de Software",
  headline: "Backend em construção. Código com clareza. Aprendizado em produção.",
  summary:
    "Estudante de tecnologia focado em desenvolvimento backend, com base em Python, orientação a objetos, Git e projetos práticos. Busco meu primeiro estágio para contribuir com organização, colaboração, boa comunicação e inglês avançado em um time de engenharia de software.",
  location: "São Paulo, Brasil",
  stats: [
    { value: "8", label: "repositórios públicos no GitHub" },
    { value: "Python", label: "tecnologia principal nos estudos backend" },
    { value: "Análise e Desenvolvimento de Sistemas", label: "FATEC Ipiranga" },
  ],
  links: [
    { label: "Email", href: "mailto:leonardofukuda9@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/mitsuoleo", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardofukuda/", icon: Linkedin },
  ],
};
