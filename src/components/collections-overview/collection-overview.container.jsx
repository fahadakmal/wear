import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from '../with-spinner/with-spinner.component'
import { compose } from "redux";
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsFetching } from '../../redux/shop/shop.selector'
const mapStateToProps = createStructuredSelector({
    isLoading : selectCollectionsFetching
})

const CollectionOverViewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionOverViewContainer;