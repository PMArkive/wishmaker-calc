import { isNil } from 'lodash-es';
import { render } from 'preact';
import { Result } from '../components/result';
import { findShinyJirachiTime } from './jirachi';

function handleSave(event) {
  const [ saveData ] = event.target.files;
  const reader = new FileReader();

  reader.onload = () => {
    const save = new Uint8Array(reader.result);
    const result = findShinyJirachiTime(save);

    if (isNil(result)) {
      return render(<div>No results found</div>, document.getElementById('result'));
    }

    return render(<Result result={result} />, document.getElementById('result'));
  }
  reader.readAsArrayBuffer(saveData);
};

export { handleSave };