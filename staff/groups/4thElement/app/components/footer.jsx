
function Footer ({GoToSearch, GoToHome, GoToFavs, footerState, sportState}) {

    const handleGoToSearch= () => {
        GoToSearch()
    }
    const handleGoToHome = () => {
        GoToHome()
    }
    
    const handleGoToFavs = () => { //put state to change color to white on the section your at and not at hover at least for movile
        GoToFavs()
    }

    return <footer className="Footer">
    <section className="Footer__container">
        <i onClick={handleGoToHome} className={"fas fa-home fa-2x fa-home" + (sportState === 'surf' ? 'Surf' : 'Snow') + (footerState === 'home' ? '--active' : '') }></i>
        <i onClick={handleGoToSearch} className={`fas fa-search fa-2x fa-search` + (sportState === 'surf' ? 'Surf' : 'Snow') + (footerState === 'search' ? '--active' : '') }></i>
        <i className={`fas fa-map-marked-alt fa-2x fa-map-marked-alt` + (sportState === 'surf' ? 'Surf' : 'Snow') + (footerState === 'map' ? '--active' : '') }></i>
        <i onClick={handleGoToFavs} className={`fas fa-star fa-2x fa-star` + (sportState === 'surf' ? 'Surf' : 'Snow') + (footerState === 'favs' ? '--active' : '') }></i>
    </section>
</footer>

}