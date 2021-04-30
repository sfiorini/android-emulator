#!/usr/bin/env node
const inquirer = require('inquirer');
const { listEmulators, startEmulator, hasSdkPath } = require('./emulator');

if (!hasSdkPath()) {
  console.error('Make sure that the ANDROID_SDK environment variable is set');
}

listEmulators()
  .then((avds) => {
    if (avds && avds.length > 0) {
      startEmulator(avds[0]);
    }
    setTimeout(() => {
      process.exit(0);
    }, 7000);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
