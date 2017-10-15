import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from './card'
import { loadWords } from '../../modules/words'

export class Grid extends React.Component {
    componentWillMount() {
        this.props.loadWords();
    }

    render() {
        const { arrWords, displayIds } = this.props;
        // console.log('in grid render' ,  this.props)

        let Cards = [];
        for (let i = 0; i < displayIds.length; i++) {
            const index = displayIds[i];
            Cards.push(<Card key={arrWords[index].id} objWord={arrWords[index]} />)
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    {Cards}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    arrWords: state.words.arrWords,
    displayIds: state.words.displayIds
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loadWords
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid)