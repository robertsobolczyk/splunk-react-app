const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App').default;

module.exports = {

  start: function (props) {
    ReactDOM.render(
      <App props={props} />,
      document.getElementById('root')
    );
  }
};
