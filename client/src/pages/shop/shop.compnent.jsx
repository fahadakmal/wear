import React,{Suspense, lazy, useEffect} from "react";

import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Spinner from "../../components/spinner/spinner.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const CollectionOverViewContainer=lazy(()=>import('../../components/collections-overview/collection-overview.container'));
const CollectionPageContainer=lazy(()=>import('../collection/collection.container'));


const ShopPage =({fetchCollectionsStart,match})=>{

      useEffect(() => {
        fetchCollectionsStart();

      },[fetchCollectionsStart])

        
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
         component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
        </Suspense>
      </div>
    );
  
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart : () =>dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);
