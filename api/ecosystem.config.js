module.exports = {
  apps: [{
    name: 'dmd-domy-backend',
    cwd: __dirname,
    script: './api_mysql.js',
    interpreter: process.execPath,
    exec_mode: 'fork',
    instances: 1,
    watch: false,
    wait_ready: true,
    listen_timeout: 20000,
    autorestart: true,
    restart_delay: 5000,
    min_uptime: 30000,
    max_restarts: 3,
    vizion: false,
    out_file: './logs/pm2-out.log',
    error_file: './logs/pm2-error.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    env: {
      NODE_ENV: 'production',
      NODE_OPTIONS: '',
      NODE_PATH: ''
    }
  }]
};
