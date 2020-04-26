import { compose } from 'redux'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionsLoaded} from '../../redux/collections/shop.selectors'
import withSpinner from '../withSpinner/withSpinner.component'
import CollectionsOverview from './CollectionsOverview.component'

const CollectionsOverviewContainer = compose(
    connect(createStructuredSelector({
        isLoading: selectIsCollectionsLoaded
    })),
    withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
