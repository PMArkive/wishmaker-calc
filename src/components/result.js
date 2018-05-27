import { SpacedBlock } from './spaced-block';

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

export { Result };