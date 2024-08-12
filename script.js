const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data =  await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    articles.map(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('col');
        const card = document.createElement('div');
        const title = document.createElement('h4');
        card.classList.add('card');
        articleDiv.appendChild(card);
        card.appendChild(title);
        card.style.width = '28.125em';
        card.style.height = '13.75em';
        card.style.justifyContent = 'center';
        card.style.padding = '1.6em';
        title.style.lineHeight = '1.62';
        title.style.fontFamily = 'Newsreader, serif';
        title.textContent = article.title;
        newsDiv.appendChild(articleDiv);
    })
}