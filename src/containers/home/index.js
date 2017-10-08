import React from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadWords } from '../../modules/words'
import Pagination from '../word/pagination'
import Grid from '../word/grid'
import Search from '../word/search'
import NotFound from '../word/notFound'

class Home extends React.Component {
  /*  componentWillMount() {
     console.log('GrandChild did mount.');
     this.props.loadVenues();
     this.props.loadWords();
     console.log('>>>>>>>>>>>>>>>>>>>', this.props);
   } */
  render() {
    let {currentPage, totalPages, totalWords} = this.props
    return (
      <div>


        {/* <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p> */}

        <h1>react vocab</h1>
        <br />
        <br />
        <Search />
        <br />
        <br />
        <p >Page {this.props.currentPage} of {this.props.totalPages}</p>
        <Pagination/>
        <NotFound />
        <Grid />
      </div>
    );

  }
}

const mapStateToProps = state => ({
  isLoading: state.words.isLoading,
  arrWords: state.words.arrWords,
  displayIds: state.words.displayIds,
  totalWords: state.words.totalWords,
  totalPages: state.words.totalPages,
  currentPage: state.words.currentPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadWords
  // changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
