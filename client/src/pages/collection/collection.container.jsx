import CollectionPage from './collection.component'
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { compose } from 'redux';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector(
    {
        isLoading: (state) =>!selectCollectionsLoaded(state)

    }
)

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;