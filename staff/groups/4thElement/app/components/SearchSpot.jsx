function SearchSpotCompo({onSubmitSpot, searchSelector, selectorState}) {
    //change name to search because it will seachr users to

    const handleSpot = (event) => {
        event.preventDefault()

        let { query } = event.target

        query = query.value

        onSubmitSpot(query)
    }

    const handelClickedSelector = (val) => {
        searchSelector(val)
        
    }


return <section className='Searcher'>
    <form onSubmit={handleSpot}>
        <div className="Searcher__input-container">
            <button className="Searcher__input-container__button"><img  className='Searcher__input-container__image' src="./images/icon.png"/></button>
            <input className='Searcher__input-container__type' placeholder='Search Spots..' type="text" name='query'/>
        </div>
    </form>
    <div className="Searcher__selector">
        <div className={"Searcher__selectorSpot" + (selectorState === 'spots' ? "--active" : "")} onClick={()=>handelClickedSelector('spots')}>Spots</div>
        <div className={"Searcher__selectorUser" + (selectorState === 'users' ? "--active" : "")} onClick={()=>handelClickedSelector('users')}>Riders</div>
    </div>
</section>

}