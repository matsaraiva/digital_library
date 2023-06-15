const livrosLista = document.getElementById('livros-lista');

// Dados fictícios de livros
const livros = [
  {
    titulo: 'Livro 1',
    autor: 'Autor 1',
    url: 'livro1.pdf'
  },
  {
    titulo: 'Livro 2',
    autor: 'Autor 2',
    url: 'livro2.pdf'
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
