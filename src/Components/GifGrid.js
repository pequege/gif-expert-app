import React from 'react'
import { GifGridItem } from './GifGridItem';
import { UseFetchGifs } from '../Hooks/UseFetchGifs';

export const GifGrid = ({category}) => {
    const {data:images, loading} = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && 'Cargando...' }
            <div className="card-grid">
                {
                    images.map(img =>(
                        <GifGridItem {...img}  key={img.id}/>
                    ))
                }
            </div>
        </>
    )
}
