import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from './card'
import { loadWords } from '../../modules/words'

export class Grid extends React.Component {
    componentDidMount() {
        this.props.loadWords();
    }
    
    render() {
        
        const { displayWords } = this.props;
        
        const Cards = displayWords.map(objWord => {
            return <Card key={objWord.id} objWord={objWord} />
        })

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
    displayWords: state.words.displayWords
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loadWords
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid)