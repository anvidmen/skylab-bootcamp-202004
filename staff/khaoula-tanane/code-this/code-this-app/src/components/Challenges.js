import React, { useEffect, useState } from 'react'
import { retrieveChallenges} from 'code-this-client-logic'
import Challenge from './Challenge'
import retrieveCategory from 'code-this-client-logic/retrieve-category'

function Challenges(props){
    const [category, setCategory] = useState(null)
    const {match: {params: {category: categoryName}}} = props
    useEffect(()=>{
        
        handleRetrieveCategory()
    }, [categoryName])
    
    const handleRetrieveCategory = async ()=> {
        const _category = await retrieveCategory(categoryName)
        setCategory(_category)
    }

    return (
        <>
            {category ? (
                <div>
                    <h1>{category.name}</h1>
                    {category.challenges.map(challenge => <Challenge {...challenge}/>)}
                </div>
            ) : <p>loading challenges..</p>}
        </>
    )

}

export default Challenges