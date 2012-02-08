require 'rake-pipeline'
require 'rake-pipeline/middleware'
use Rake::Pipeline::Middleware, 'Assetfile'

# require 'rack/streaming_proxy'
# use Rack::StreamingProxy do |request|
#    if request.path.start_with?('/proxy')
#      "http://127.0.0.1:8080#{request.path}"
#    end
# end

require 'rack-rewrite'
use Rack::Rewrite do
  rewrite %r{^(.*)\/$}, '$1/index.html'
end

run Rack::Directory.new('.')
