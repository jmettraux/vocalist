
require 'json'

items = []
a = []

File.readlines(File.dirname(__FILE__) + '/source.txt').each do |line|
  line = line.strip
  next if line[0] == '#'
  a << line
  if a.length == 3
    items << a
    a = []
  end
end

puts "var cards = #{JSON.dump(items)};"

