import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpert = () => {

    //const categories = ['One Punch Man', 'Samurai x', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man']);

    //const handleAdd = () => {
    //    setcategories( [...categories, 'Evangelion'] )
    //}

    return (
        <>
            <h2>Gif Expert</h2>
            <hr />
            <AddCategory setCategories = { setCategories } />
            <ol>
                {
                    categories.map( category =>
                        (<GifGrid category = {category} key={category}/>)
                    )
                }
            </ol>
        </>
    )
}
