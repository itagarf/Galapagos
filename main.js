const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchMovies = async searchText =>{
    const res = await fetch('data.json');
    const movies = await res.json();

    let matches = movies.filter(movie => {
        const regex = new RegExp(`^${searchText}`, `gi`);
        return movie.name.match(regex);
    });
    if (searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }
    outputHtml(matches);
};

const outputHtml = matches => {
    if (matches.length > 0){
        const html = matches.map(match => `
            <div class= "dropMovie">
            <a href="notimetodie.html">${match.name}<a>
            </div>
        `)
        .join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input', ()=> searchMovies (search.value));
