export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  // Caminho da imagem de capa. Coloque o arquivo em /public/projects/ e aponte aqui.
  imageUrl: string
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'seguraí',
    title: 'SegurAÍ',
    description:
      'Sistema de risk-scoring para maquinário agrícola utilizando Inteligência Artificial, com dashboards de dados integrados via ECharts para visualização em tempo real dos riscos operacionais.',
    tags: ['React', 'TypeScript', 'Python', 'ECharts', 'IA'],
    imageUrl: '/projects/seguraí-cover.png',
    repoUrl: 'https://github.com/ViniciusAdati/seguraí', // TODO: ajustar link real
    liveUrl: undefined,
    featured: true,
  },
  {
    id: 'farmtech-solutions',
    title: 'FarmTech Solutions',
    description:
      'Sistema de irrigação automatizada com monitoramento de umidade do solo, pH e níveis de NPK, desenvolvido com microcontroladores ESP32 e integração de sensores IoT.',
    tags: ['ESP32', 'IoT', 'C++', 'Automação'],
    imageUrl: '/projects/farmtech-cover.png',
    repoUrl: 'https://github.com/ViniciusAdati/farmtech-solutions', // TODO: ajustar link real
    liveUrl: undefined,
    featured: true,
  },
]
