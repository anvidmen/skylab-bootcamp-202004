module.exports = (query, results) => {
    return `<section class="search">
    <form action="/search-stickies" method="GET">
        <input name="q" placeholder="Search" ${query ? `value="${query}"` : ''}>
        <button>🔍</button>
    </form>
    <div>${results?results:''}</div>
</section>`
}