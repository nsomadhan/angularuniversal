    module.exports = {
  apps : [
  {
    name      : "Playtestt",
    script    : "/project/Playtestt/dist/Playtestt/server/main.js",
    instances : "2",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 4200
    }
  }
  ]
}
