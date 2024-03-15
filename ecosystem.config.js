module.exports = {
  apps: [
    {
      name: 'frontend',
      port: 6000,
      exec_mode: 'cluster', // Optional: If you want it run multiple instances.
      instances: 'max', // Or a number of instances.
      // 'max' auto detects how many CPU cores there are.
      // The previous option must exist to use the above.
      script: '.output/server/index.mjs'
    }
  ]
};
