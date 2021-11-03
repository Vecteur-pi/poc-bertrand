module.exports = {
  apps: [
    {
      script: 'dist/server',
      watch: '.',
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '212.83.167.103',
      ref: 'poc/master',
      repo: 'github.com:Vecteur-pi/poc-bertrand.git',
      path: '/home/ubuntu/scaleway',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload dist/server --env production',
      'pre-setup': '',
    },
  },
}
