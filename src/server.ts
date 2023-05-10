// import express from 'express';
// import fs from 'fs';
// import { Device } from './types';

// const PORT = 4000;
// const DEVICES_ENDPOINT = '/devices';

// const server = express();

// const devices: Device[] = [];

// fs.readFile('./src/devices.json', 'utf8', (err, data) => {
//   if (err) {
//     global.console.error(err);

//     return;
//   }

//   devices.push(...JSON.parse(data));

//   global.console.log(devices);
// });

// server.listen(4000, () => {
//   global.console.log(`Server is running on PORT = ${PORT}`);
// });

// server.get(DEVICES_ENDPOINT, (req, res) => {
//   res.send(devices);
// });
