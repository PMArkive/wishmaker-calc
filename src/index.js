import "./style";
import { Component, render } from "preact";
import { JirachiImg } from './components/jirachi-img';
import { handleSave } from './jirachi/handle-save';

export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <h1>Welcome to JirachiCalc</h1>
        Click the Jirachi to calculate your shiny Wishmaker time

        <div style={{ marginTop: '25px' }}>
          <label for="saveInput">
            <JirachiImg />
          </label>
          <input onchange={handleSave} type="file" id="saveInput" style={{ display: 'none' }}/>
          <div id='result'>
          </div>
        </div>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
