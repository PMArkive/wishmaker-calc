import { join, isEmpty } from 'lodash-es';
import { SpacedBlock } from './spaced-block';

const Result = ({ result }) => {
  if (isEmpty(result)) {
    return <div style={{ marginTop: '15px' }}>No results found!</div>
  }

  const { seed, time, isFirstBlockNewer, validRNG } = result;

  if (!validRNG || isFirstBlockNewer) {
    const message = isFirstBlockNewer ? 'Current save is in the wrong place' : 'Small anomaly in block 0';
    return <SpacedBlock>Please save one more time - {message}</SpacedBlock>;
  }

  return (
    <div style={{ marginTop: '15px' }}>
      <SpacedBlock>{time}</SpacedBlock>
      <SpacedBlock>Seed: {seed.shinySeed}, PID: {seed.pid}, Nature: {seed.nature}</SpacedBlock>
      <SpacedBlock>IVs: {seed.ivs}</SpacedBlock>
    </div>
  );
}

export { Result };