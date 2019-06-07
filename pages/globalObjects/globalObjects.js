//global objects
//  __dirname, __filename, require, module, exports

/* __dirname */
/* return main node js project folder path */
console.log(__dirname)

/* __filename */
/* return current working directory path */
console.log(__filename)

/* require */
/* using of require are we can add any third party module in our project */
/* get value from another  require_module_exports.js page */
const req_mod_exp_js = require('./require_module_exports');
console.log(req_mod_exp_js.nm);
console.log(req_mod_exp_js.add());