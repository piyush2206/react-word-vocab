import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadWords, searchWords } from '../../modules/words'

export class Pagination extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1
        };
    }

    updatePageState(event) {
        console.log('eventttttttttttt', event)
        this.setState({ currentPage: event.target.value })
    }

    render() {

        const { loadWords, searchWords } = this.props;
        const { currentPage } = this.state;

        return (
            <nav aria-label="Page navigation example">
                <div className="d-flex justify-content-end">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item" value={currentPage - 1} onClick={this.updatePageState.bind(this)}>
                            <button className="page-item">{currentPage - 1}</button>
                        </li>
                        <li className="page-item" value={currentPage} onClick={this.updatePageState.bind(this)}>{currentPage}</li>
                        <li className="page-item" value={currentPage + 1} onClick={this.updatePageState.bind(this)}>{currentPage + 1}</li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    arrWords: state.words.arrWords,
    searchKey: state.words.searchKey,
    totalWords: state.words.totalWords,
    totalPages: state.words.totalPages,
    currentPage: state.words.currentPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loadWords,
    searchWords
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)