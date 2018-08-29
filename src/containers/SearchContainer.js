import React from 'react';
// import Search from './../components/Search.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import handleSearchChange from '../actions/search.js';
import { handleVideoSearch } from '../actions/search.js';


// var SearchContainer = () => {};
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ handleVideoSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
// export default SearchContainer;
