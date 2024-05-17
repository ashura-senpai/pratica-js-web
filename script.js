document.addEventListener('DOMContentLoaded', function() {
  // Function to create and append a new element
  function createElementWithClass(type, className, parent) {
    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (parent) parent.appendChild(element);
    return element;
  }

  // Header
  const header = document.querySelector('header');
  const h1 = createElementWithClass('h1', null, header);
  h1.textContent = 'Squirtle';

  // Navigation
  const nav = document.querySelector('nav');
  const ul = createElementWithClass('ul', null, nav);

  const sections = [
    { id: 'info-squirtle', label: 'Informações sobre Squirtle' },
    { id: 'caracteristicas', label: 'Características' },
    { id: 'curiosidades', label: 'Curiosidades' },
    { id: 'artigo-squirtle', label: 'Artigo sobre Squirtle' },
    { id: 'recursos', label: 'Recursos Adicionais' },
    { id: 'evolucao', label: 'Evolução' }
  ];

  sections.forEach(section => {
    const li = createElementWithClass('li', null, ul);
    const a = createElementWithClass('a', null, li);
    a.href = `#${section.id}`;
    a.textContent = `| ${section.label} |`;
  });

  // Main Content
  const main = document.querySelector('main');

  // Info Squirtle Section
  const infoSquirtle = createElementWithClass('section', null, main);
  infoSquirtle.id = 'info-squirtle';
  infoSquirtle.setAttribute('aria-labelledby', 'info-squirtle-label');
  const infoH2 = createElementWithClass('h2', null, infoSquirtle);
  infoH2.id = 'info-squirtle-label';
  infoH2.textContent = 'Informações sobre Squirtle';

  const infoDiv = createElementWithClass('div', null, infoSquirtle);
  const img1 = createElementWithClass('img', null, infoDiv);
  img1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
  img1.alt = 'Squirtle 1';
  const img2 = createElementWithClass('img', null, infoDiv);
  img2.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
  img2.alt = 'Squirtle 2';

  const infoP = createElementWithClass('p', null, infoSquirtle);
  infoP.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';

  // Características Section
  const caracteristicas = createElementWithClass('section', null, main);
  caracteristicas.id = 'caracteristicas';
  caracteristicas.setAttribute('aria-labelledby', 'caracteristicas-label');
  const caracH2 = createElementWithClass('h2', null, caracteristicas);
  caracH2.id = 'caracteristicas-label';
  caracH2.textContent = 'Características';

  const caracP = createElementWithClass('p', null, caracteristicas);
  caracP.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';

  // Curiosidades Section
  const curiosidades = createElementWithClass('section', null, main);
  curiosidades.id = 'curiosidades';
  curiosidades.setAttribute('aria-labelledby', 'curiosidades-label');
  const curioH2 = createElementWithClass('h2', null, curiosidades);
  curioH2.id = 'curiosidades-label';
  curioH2.textContent = 'Curiosidades';

  const curioUl = createElementWithClass('ul', null, curiosidades);
  const curiosities = [
    'Squirtle é um dos Pokémon mais populares e adoráveis.',
    'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
    'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
  ];

  curiosities.forEach(text => {
    const li = createElementWithClass('li', null, curioUl);
    li.textContent = text;
  });

  // Artigo sobre Squirtle
  const artigo = createElementWithClass('article', null, main);
  artigo.id = 'artigo-squirtle';
  artigo.setAttribute('aria-labelledby', 'artigo-squirtle-label');
  const artH2 = createElementWithClass('h2', null, artigo);
  artH2.id = 'artigo-squirtle-label';
  artH2.textContent = 'Squirtle: O Amigo Aquático';

  const artTexts = [
    'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.',
    'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.',
    'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'
  ];

  artTexts.forEach(text => {
    const p = createElementWithClass('p', null, artigo);
    p.textContent = text;
  });

  // Recursos Adicionais Section
  const recursos = createElementWithClass('section', null, main);
  recursos.id = 'recursos';
  recursos.setAttribute('aria-labelledby', 'recursos-label');
  const recH2 = createElementWithClass('h2', null, recursos);
  recH2.id = 'recursos-label';
  recH2.textContent = 'Recursos Adicionais';

  const recUl = createElementWithClass('ul', null, recursos);
  const links = [
    { href: 'https://www.pokemon.com/br/pokedex/squirtle', text: 'Pokédex - Squirtle' },
    { href: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)', text: 'Bulbapedia - Squirtle' }
  ];

  links.forEach(link => {
    const li = createElementWithClass('li', null, recUl);
    const a = createElementWithClass('a', null, li);
    a.href = link.href;
    a.target = '_blank';
    a.textContent = link.text;
  });

  // Evoluções Section
  const evolucao = createElementWithClass('section', null, main);
  evolucao.id = 'evolucao';
  evolucao.setAttribute('aria-labelledby', 'evolucao-label');
  const evoH2 = createElementWithClass('h2', null, evolucao);
  evoH2.id = 'evolucao-label';
  evoH2.textContent = 'Evoluções';

  const evoUl = createElementWithClass('ul', null, evolucao);
  const evolutions = [
    { src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', alt: 'Squirtle', caption: '1. Squirtle' },
    { src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png', alt: 'Wartortle', caption: '2. Wartortle' },
    { src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png', alt: 'Blastoise', caption: '3. Blastoise' }
  ];

  evolutions.forEach(evo => {
    const li = createElementWithClass('li', null, evoUl);
    const figure = createElementWithClass('figure', null, li);
    const img = createElementWithClass('img', null, figure);
    img.src = evo.src;
    img.alt = evo.alt;
    const figcaption = createElementWithClass('figcaption', null, figure);
    figcaption.textContent = evo.caption;
  });

  // Footer
  const footer = document.querySelector('footer');
  const footerP1 = createElementWithClass('p', null, footer);
  footerP1.setAttribute('aria-label', 'Copyright');
  footerP1.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';

  const footerP2 = createElementWithClass('p', null, footer);
  const topLink = createElementWithClass('a', null, footerP2);
  topLink.href = '#header';
  topLink.textContent = 'Voltar para o topo';

  const footerP3 = createElementWithClass('p', null, footer);
  const emailLink = createElementWithClass('a', null, footerP3);
  emailLink.href = 'mailto:contato@squirtlepage.com';
  emailLink.textContent = 'Contato via e-mail';

  const footerP4 = createElementWithClass('p', null, footer);
  const phoneLink = createElementWithClass('a', null, footerP4);
  phoneLink.href = 'tel:+5555555555';
  phoneLink.textContent = 'Telefone: (55) 5555-5555';
});
