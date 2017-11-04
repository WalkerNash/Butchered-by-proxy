require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/battlebots' do
erb :battlebots
end

get '/dronerace' do
  erb :dronerace
end

get '/megabots' do
  erb :megabots
end
