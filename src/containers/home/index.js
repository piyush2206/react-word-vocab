import React from 'react'
import { connect } from 'react-redux'

import Pagination from '../word/pagination'
import Grid from '../word/grid'
import Search from '../word/search'
import NotFound from '../word/notFound'

class Home extends React.Component {

  render() {
    return (
      <div>
        {/* <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p> */}
        <br />
        <br />
        <div className="container">
          <div className="row">
            <Search />
            <Pagination />
          </div>
        </div>
        <NotFound />
        <Grid />
      </div>
    );
  }
}

export default connect()(Home)
