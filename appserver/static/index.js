
require([
  "splunkjs/mvc",
  "splunkjs/mvc/searchmanager",
  // require our bundle js file
  "/static/app/reactapp/dist/index_bundle.js",
], function (mvc, SearchManager, React) {

  // Start our React.js application and pass props in it 
  React.start({
    text: "Pass from Splunk to react app anything you need...",
    SearchManager,
    mvc
  });

});
