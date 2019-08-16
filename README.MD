# Splunk React App

## Project for setup React application in Splunk Web

1. Create in Splunk a new App:
    - For name, enter - "reactapp"
    - For folder name, enter - "reactapp"
2. Open "reactapp", click Dashboards and then "Create New Dashboard", title it - React
3. Open $SPLUNK_HOME/etc/apps/reactapp directory, create folders 'appserver/static' and structure project similar with repo (or just delete everything in reactapp directory and clone the repo)
4. Open $SPLUNK_HOME/etc/apps/reactapp/local/data/ui/views/react.xml and replace with
```
<dashboard script="index.js" stylesheet='app.css' theme="dark" hideEdit="true">
  <label>React</label>
  <row>
    <panel>
      <html>
        <div id="root"/>
      </html>
    </panel>
  </row>
</dashboard>
```
5. Run ```npm install``` command from /appserver/static directory to install dependencies 
6. And ```npm run build``` to make /dist/index_bundle.js file and resource directory
7. Debug/refresh Splunk and open React dashboard from "Reactapp" application



