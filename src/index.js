import "./style";
import { Component, render } from "preact";
import { findShinyJirachiTime } from './jirachi/jirachi';

const SpacedBlock = ({ children }) => <div style={{ padding: '5px' }}>{children}</div>;

const Result = ({ seed, time }) => {
  const { pid, nature, ivs, shinySeed } = seed;

  return (
    <div>
      <SpacedBlock>{time}</SpacedBlock>
      <SpacedBlock>Seed: {shinySeed}, PID: {pid}, Nature: {nature}</SpacedBlock>
      <SpacedBlock>IVs: {ivs}</SpacedBlock>
    </div>
  );
}

function handleFile(event) {
  const [ saveData ] = event.target.files;
  const reader = new FileReader();

  reader.onload = () => {
    const save = new Uint8Array(reader.result);
    const { seed, time } = findShinyJirachiTime(save);
    
    render(<Result seed={seed} time={time} />, document.getElementById('result'));
  }
  reader.readAsArrayBuffer(saveData);
};

const JirachiImg = () => <img src='https://vignette.wikia.nocookie.net/pkmnshuffle/images/6/60/Jirachi.png/revision/latest?cb=20170407224444' />;

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
          <input onchange={handleFile} type="file" id="saveInput" style={{ display: 'none' }}/>
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
