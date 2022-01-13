import React,{useEffect} from "react";

import CollectionOverViewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage =({fetchCollectionsStart,match})=>{

      useEffect(() => {
        fetchCollectionsStart();

      },[fetchCollectionsStart])


    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
         component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
    );
  
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart : () =>dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage);
