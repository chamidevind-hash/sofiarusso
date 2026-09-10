module.exports = {
  apps: [
    {
      name: "sofiarusso",
      cwd: "/var/www/sofiarusso",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
