import exists from './exists.js';
import run from './run.js';

const install = dest =>
	exists(`${dest}/package.json`) && run('yarn', ['install', '--cwd', dest]);

export default install;
