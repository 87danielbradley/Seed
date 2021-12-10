import { connect } from "react-redux"
import SearchBar from './search_view';

const mSTP = (state, ownProps) => {
    debugger
    let searchProjects = Object.values(state.entities.projects)
    return({
        projects: searchProjects
    })
}

const mDTP = (dispatch, ownProps) => (null);


export default connect( mSTP)(SearchBar);