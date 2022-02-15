const os = require('os');

// Platform of OS
console.log('Display platform of OS: ');
console.log(os.platform());

// CPU architecture of OS
console.log('Display CPU architecture of OS: ');
console.log(os.arch());

// CPU Core information
console.log('Display CPU core information of OS: ');
console.log(os.cpus());

// Free memory (in kbs)
console.log('Display free memory of OS: ');
console.log(os.freemem());

// Total memory (in kbs)
console.log('Display free memory of OS: ');
console.log(os.totalmem());

// Home directory
console.log('Display home directory: ');
console.log(os.homedir());

// Uptime (gives a number of seconds OS is up)
console.log('Display number of seconds OS is up: ');
console.log(os.uptime());
