import React from 'react';
import { connect } from 'react-redux'

export class NotFound extends React.Component {

    render() {

        const { isLoading, displayIds } = this.props;
        if(isLoading){
            return (<br/>)
        }
        if(displayIds.length > 0 ){
            return (<br/>)
        }
        return (
            <div className="container-fluid" style={{textAlign: 'center'}}>
                <h3>Sorry, no results found. Please try some other search term. </h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.words.isLoading,
    displayIds: state.words.displayIds
})

export default connect(
    mapStateToProps,
)(NotFound)