import { isNil } from 'lodash-es';
import { render } from 'preact';
import { Result } from '../components/result';
import { findShinyJirachiTime } from './jirachi';

function handleSave(event) {
  const [ saveData ] = event.target.files;
  const reader = new FileReader();

  reader.onload = () => {
    const save = new Uint8Array(reader.result);
    const { seed, time } = findShinyJirachiTime(save);

    if (isNil(seed) && isNil(time)) {
      return render(<div>No results found</div>, document.getElementById('result'));
    }

    return render(<Result seed={seed} time={time} />, document.getElementById('result'));
  }
  reader.readAsArrayBuffer(saveData);
};

export { handleSave };