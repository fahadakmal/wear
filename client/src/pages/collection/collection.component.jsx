import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'
import React from 'react'
import { selectCollection } from '../../redux/shop/shop.selector';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId))
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}


 
 export default CollectionPage
