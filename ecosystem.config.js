module.exports = {
  apps: [
    {
      script: 'dist/server.js',
      watch: '.',
    },
    // {
    //   // script: './service-worker/',
    //   // watch: ['./service-worker'],
    // },
  ],

  deploy: {
    production: {
      user: 'root',
      host: '51.158.71.99',
      ref: 'origin/master',
      repo: 'https://github.com/Vecteur-pi/poc-bertrand.git',
      path: '/root/web_api',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
}
