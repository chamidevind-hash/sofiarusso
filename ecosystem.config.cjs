module.exports = {
  apps: [
    {
      name: "sofiarusso",
      cwd: "D:/Sofia HUB GIT",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};