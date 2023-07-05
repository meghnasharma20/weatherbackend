const schedule = require('node-schedule');


/**every hour 33 minute configuration of server time
 *
 * interval between job : 1hr
 *
*/
const rule = new schedule.RecurrenceRule();
rule.minute = 35;


module.exports = rule
