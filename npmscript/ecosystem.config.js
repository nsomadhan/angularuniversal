    module.exports = {
  apps : [
  {
    name      : "$PROJECT",
    script    : "/project/$PROJECT/dist/$PROJECT/server/main.js",
    instances : "2",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 4200
    }
  }
  ]
}
