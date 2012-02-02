require 'rack-rewrite'
require 'rake-pipeline'
require 'rake-pipeline/middleware'

use Rake::Pipeline::Middleware, 'Assetfile'
use Rack::Rewrite do
  rewrite %r{^(.*)\/$}, '$1/index.html'
end
run Rack::Directory.new('.')
