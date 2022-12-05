// const myModule = require('./4_exporting_custom_module');
const { inc, dec, getCount } = require('./4_exporting_custom_module');

inc();
inc();
inc();

console.log(`the count is ${getCount()}`);