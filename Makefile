
serve:
	ruby -run -e --httpd www/ -p 1680
s: serve

deploy:
	rsync -azve ssh www/ lin:www/vocalist/
d: deploy

#.PHONY: serve

