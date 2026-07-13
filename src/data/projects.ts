import cap6Fase2 from "../assets/cap6_fase2.png";
import farmtechIotIrrigation from "../assets/FarmTech_IOT_Irrigation.png";
import farmtechSolutions from "../assets/FarmTech_Solutions.png";
import portugol from "../assets/portugol.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "caneguard",
    title: "CaneGuard",
    description:
      "Sistema de monitoramento técnico para colheita mecanizada de cana-de-açúcar, integrando dados de campo, laboratório e clima (API OpenWeather) com persistência em Oracle Database. CRUD completo de talhões, relatórios em Pandas e execução via Docker.",
    tags: ["Python", "Oracle", "Pandas", "Docker"],
    imageUrl: cap6Fase2,
    repoUrl: "https://github.com/ViniciusAdati/cap6_fase2",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "farmtech-solutions",
    title: "FarmTech Solutions",
    description:
      "Sistema de irrigação automatizada com monitoramento de umidade do solo, pH e níveis de NPK, desenvolvido com microcontroladores ESP32 e integração de sensores IoT.",
    tags: ["ESP32", "IoT", "C++", "Automação"],
    imageUrl: farmtechSolutions,
    repoUrl: "https://github.com/ViniciusAdati/farmtech-solutions",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "farmtech-iot-irrigation",
    title: "FarmTech IoT Irrigation",
    description:
      "Projeto de automação agrícola desenvolvido para a startup FarmTech Solutions, focado em otimizar o uso de recursos hídricos através do monitoramento em tempo real de sensores e atuadores acoplados a um ESP32.",
    tags: ["C++", "ESP32", "IoT", "Sensores"],
    imageUrl: farmtechIotIrrigation,
    repoUrl:
      "https://github.com/ViniciusAdati/FarmTech-IoT-Irrigation/tree/main/Cap%201%20-%20Um%20Mapa%20do%20Tesouro",
    liveUrl: undefined,
    featured: false,
  },
  {
    id: "portugol-compiler-python",
    title: "Portugol Compiler Python",
    description:
      "Projeto acadêmico da disciplina de Compiladores, com o objetivo de compilar códigos escritos em Visualg (Portugol) utilizando Python. Oferece uma ferramenta que facilita o uso do Visualg, linguagem amplamente empregada no ensino de lógica de programação.",
    tags: ["Python", "Compiladores", "Acadêmico"],
    imageUrl: portugol,
    repoUrl: "https://github.com/ViniciusAdati/portugol-compiler-python",
    liveUrl: undefined,
    featured: false,
  },
];
