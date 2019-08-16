import React from "react";
import { Button } from "semantic-ui-react";
import HighChart from './HighChart';

import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  constructor({ props }) {
    super();
    this.state = {
      text: props.text,
      searchManager: props.SearchManager,
      mvc: props.mvc,
      searchResult: []
    };
  }

  componentDidMount() {
    const mysearch = new this.state.SearchManager({
      id: "my_search",
      earliest_time: "-2d@d",
      latest_time: "now",
      preview: false,
      cache: false,
      search: `index="someone_indexer"`
    });

    const search = mysearch.data("preview", {
      count: 0,
      output_mode: "json_rows"
    });

    this.state.mvc.Components.revokeInstance("my_search");

    search.on("data", () => {
      console.log(search.data().rows);
      this.setState({ searchResult: search.data().rows });
    });
  }

  handleShowModal = () => {};

  render() {
    return (
      <>
        <h1>Hello, React!</h1>
        
        <Button
          icon="chart line"
          size="mini"
          content="Chart"
          onClick={this.handleShowModal}
        />

        <HighChart />
      </>
    );
  }
}

export default App;
