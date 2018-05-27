import { join } from 'lodash-es';
import { SpacedBlock } from './spaced-block';

const Result = ({ result }) => {
  const { seed, time, isFirstBlockNewer } = result;
  const { pid, nature, ivs, shinySeed } = seed;
  
  const saveMessage = join([
    'Your latest save is in the wrong space',
    'please save once before attempting this'
  ], ' - ');

  return (
    <div style={{ marginTop: '15px' }}>
      <SpacedBlock>{time}</SpacedBlock>
      <SpacedBlock>Seed: {shinySeed}, PID: {pid}, Nature: {nature}</SpacedBlock>
      <SpacedBlock>IVs: {ivs}</SpacedBlock>
      <SpacedBlock>{isFirstBlockNewer ? saveMessage : ''}</SpacedBlock>
    </div>
  );
}

export { Result };