    module.exports = {
  apps : [
  {
    name      : "$PROJECT",
    script    : "/data/apps/dist/$PROJECT/server/main.js",
    instances : "2",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 4200
    }
  }
  ]
}
