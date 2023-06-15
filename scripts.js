const livrosLista = document.getElementById('livros-lista');

// Dados fictícios de livros
const livros = [
  {
    titulo: 'Children of Rima: Seeds of The Fallen',
    autor: 'Miriam Yvette',
    url: 'children-of-rima-book-1-obooko.pdf'
  },
  {
    titulo: 'Gathering Storm (Tempestria 2)',
    autor: 'Gary Stringer',
    url: 'gathering-storm-tempestria-2-obooko.pdf'
  },
  // Adicione mais livros aqui
];

// Adiciona os livros à lista
livros.forEach(livro => {
  const itemLista = document.createElement('li');
  const linkLivro = document.createElement('a');
  linkLivro.textContent = `${livro.titulo} - ${livro.autor}`;
  linkLivro.href = livro.url;
  itemLista.appendChild(linkLivro);
  livrosLista.appendChild(itemLista);
});
