import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { searchWords } from '../../modules/words'

export class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            searchKey: ''
        };
    }

    updateSearch(event) {
        this.setState({ searchKey: event.target.value })
        this.props.searchWords(event.target.value)
    }

    render() {
        const { searchKey } = this.state;

        return (
            <div className="col-sm-8 col-md-8 col-lg-8 ">
                <div className="input-group input-group-lg">
                    <span className="input-group-addon" id="basic-addon1">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a word or phrase"
                        value={searchKey}
                        onChange={this.updateSearch.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    arrWords: state.words.arrWords,
    searchKey: state.words.searchKey
})

const mapDispatchToProps = dispatch => bindActionCreators({
    searchWords
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
