    module.exports = {
  apps : [
  {
    name      : "Playtest",
    script    : "/data/apps/dist/Playtest/server/main.js",
    instances : "2",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 4200
    }
  }
  ]
}
