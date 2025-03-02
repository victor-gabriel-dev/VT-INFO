document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');

    // Função para carregar notícias
    function loadNews() {
        // Exemplo de notícias (pode ser substituído por uma chamada a uma API)
        const news = [
            {
                title: 'Notícia 1',
                content: 'Conteúdo da notícia 1.',
                date: '2023-10-01'
            },
            {
                title: 'Notícia 2',
                content: 'Conteúdo da notícia 2.',
                date: '2023-10-02'
            },
            {
                title: 'Notícia 3',
                content: 'Conteúdo da notícia 3.',
                date: '2023-10-03'
            }
        ];

        // Adiciona as notícias ao container
        news.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.content}</p>
                <small>${item.date}</small>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // Chama a função para carregar as notícias
    loadNews();
});