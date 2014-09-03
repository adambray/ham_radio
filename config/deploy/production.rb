set :stage, :production

# Replace 127.0.0.1 with your server's IP address!
server '208.68.38.65', user: 'deploy', roles: %w{web app}
