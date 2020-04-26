import { compose } from 'redux'
import { connect } from 'react-redux'
import {selectIsCollectionsLoaded} from '../../redux/collections/shop.selectors'
import withSpinner from '../../components/withSpinner/withSpinner.component'
import Collection from './Collection.component'
import {createStructuredSelector} from 'reselect'

const CollectionPageContainer = compose(
    connect(createStructuredSelector({
        isLoading: selectIsCollectionsLoaded
    })),
    withSpinner
)(Collection)

export default CollectionPageContainer
