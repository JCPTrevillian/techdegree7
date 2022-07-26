import React, { Component } from 'react';
import { withRouter } from 'react-router';

import GalleryItem from "./GalleryItem";
import Loading from "./Loading";
import NoResults from "./NoResults";

class GalleryContainer extends Component {

  render() {
    const { isLoading, search, items } = this.props.state;
    const urlTopic = this.props.match.params.topic;

    let body;
    //search
    if ( urlTopic !== search ) {
      if (isLoading) {
        body = <Loading />
      } else {
        this.props.fetchData(urlTopic)  
      }
    //search results
    } else {
      if ( items.length === 0 ) {
        body = <NoResults search={search} />
      } else {
        body = (
          <div>
            <h2>Results for {search}</h2>
            <ul>
              { items.map( (item) => <GalleryItem src={item.src} key={item.id} /> ) }
            </ul>
          </div>
        )
      }
    }

    return (
      <div className="photo-container">
       { body }
      </div>
    )
  }
}

export default withRouter(GalleryContainer);