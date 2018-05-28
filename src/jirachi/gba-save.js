import { map, range, filter, isEqual, slice, isEmpty } from 'lodash-es';

function calcChksum(block) {
  let [chksum] = new Uint32Array(1);

  for (let i = 0; i < 0xF80; i+=4) {
    chksum += (block[i] + (block[i + 1] * 0x100)) + (block[i + 2] * 0x10000) + (block[i + 3] * 0x1000000);
  }

  chksum = ((chksum >> 16) + chksum) & 0xFFFF;

  return chksum.toString(16).toUpperCase();
}

function getBlocks(save) {
  return map(range(0, 28), (blockNum) => slice(save, 0 + (blockNum * 0x1000), 0x1000 + (blockNum * 0x1000)));
}

function getBlockNum(blocks, blockNum) {
  return filter(blocks, (block) => isEqual(block[0xFF4], blockNum));
}

function blockSaveAmount(block) {
  return block[0xFFC];
}

function isBlockNewer(block1, block2) {
  const amount1 = blockSaveAmount(block1);
  const amount2 = blockSaveAmount(block2);

  if (isEqual(amount1, 0) && isEqual(amount2, 255)) {
    return true;
  }

  return amount1 > amount2;
};

function isValidRNG(first, second) {
  const validP1 = isEqual(slice(first, 0, 14), slice(second, 0, 14));
  const validP2 = isEqual(slice(first, 19, 0xFF0), slice(second, 19, 0xFF0));

  return validP1 && validP2;
}

export {
  calcChksum,
  getBlocks,
  getBlockNum,
  blockSaveAmount, 
  isBlockNewer,
  isValidRNG
};
