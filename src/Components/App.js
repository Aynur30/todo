import React from 'react';
import Body from './Body';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: 'All',
    };
  }

  render() {
    return (
      <section className="todoapp">
        <Body state={this.state}/>
      </section>
    );
  }
}
