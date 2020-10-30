import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: "all",
    };
}

  render() {
    return (
      <div className="page-group">
        <Sidebar
          dummyStore={this.props.dummyStore}
        />
        <NoteList
          dummyStore={this.props.dummyStore}
          currentFolder={this.state.folder}
        />
      </div>
    );
  }
}

export default Page;