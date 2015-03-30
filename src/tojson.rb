
require 'json'

items = []
a = []

File.readlines(File.dirname(__FILE__) + '/source.txt').each do |line|
  line = line.strip
  next if line[0] == '#'
  if a.length == 3
    items << a
    a = []
  end
  a << line
end

puts "var cards = #{JSON.dump(items)};"

