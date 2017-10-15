import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { changePage } from '../../modules/words'

export class Pagination extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: 0,
            totalPages: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentPage: nextProps.currentPage,
            totalPages: nextProps.totalPages
        })
    }

    updatePageState(event) {
        let updateVal = event.target.value
        if (updateVal < 1 || updateVal > this.props.totalPages) {
            return false
        }
        this.setState({ currentPage: updateVal })
        this.props.changePage(updateVal);
    }

    render() {
        let { currentPage, totalPages } = this.state;
        const stylePageInput = {
            textAlign: 'right',
            width: '50%',
            height: '54px',
            fontSize: '20px'
        }
        const stylePageLabel = {
            fontSize: '20px',
            display: 'table-cell',
            verticalAlign: 'middle',
            height: '50px'
        }
        return (
            <div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <input
                        id='pageNumber'
                        type="number"
                        className="form-control, pull-right"
                        value={currentPage}
                        min="1"
                        max={totalPages}
                        style={stylePageInput}
                        onChange={this.updatePageState.bind(this)}
                    />
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <label id="pageTotal" for='pageNumber' style={stylePageLabel}>Of {totalPages} pages</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    totalPages: state.words.totalPages,
    currentPage: state.words.currentPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)