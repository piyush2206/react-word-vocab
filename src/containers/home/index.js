import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import { loadWords } from '../../modules/words'
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

    return (
      <div>
        {/* <h1>Home</h1>
          <p>Count: {this.props.count}</p>

          <p>
            <button onClick={this.props.loadVenues} disabled={this.props.isIncrementing}>Increment</button>
            <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
          </p>

          <p>
            <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
            <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
          </p>

          <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p> */}

        <h1>react vocab</h1>
        <br />
        <br />
        <Search />
        <br />
        <br />
        <NotFound />
        <Grid />
      </div>
    );

  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  isLoading: state.words.isLoading,
  arrWords: state.words.arrWords,
  displayWords: state.words.displayWords
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  loadWords,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
