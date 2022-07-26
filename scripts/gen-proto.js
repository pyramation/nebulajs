import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includeAminos: true,
    includeLCDClients: true,
    camelRpcMethods: true,
    includeRpcClients: true,
    useDate: 'date',
    useDuration: 'duration'
  }
});
