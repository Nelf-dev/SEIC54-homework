require "sinatra"
require "sinatra/reloader"

get "/" do
    erb :home
end

get "/write_test" do
    erb :write_test
end

get "/pass" do
    erb :pass
end

get "/refactor" do
    erb :refactor
end

get "/write_code" do
    erb :write_code
end

get "/do_refactor" do
    erb :do_refactor
end

get "/new_feature" do
    erb :new_feature
end

get "/beck" do
    erb :beck
end