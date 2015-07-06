#!/usr/bin/env ruby

require 'webrick'

port = ENV['PORT'].nil? ? 3000 : ENV['PORT'].to_i

puts "Server started: http://localhost:#{port}/"

root = File.expand_path './public'
server = WEBrick::HTTPServer.new :Port => port, :DocumentRoot => root

trap 'INT' do server.shutdown end

server.start
