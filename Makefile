
serve:
	ruby -run -e --httpd www/ -p 1680
s: serve

deploy:
	rsync -azve ssh www/ lin:www/vocalist/
d: deploy

compile:
	ruby src/tojson.rb > www/content.js
c: compile

#.PHONY: serve

