require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/battlebots' do
erb :battlebots

end
