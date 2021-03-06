import { publisher } from '../publish';

const runner = publisher({ 
  interval: '* * * * *', 
  dest: 'public/v0', 
  cwd: process.cwd(),
  log: console.log
}, () => {
  console.log('Done writing...')
});

runner.start();

