mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

serve:
	sudo docker run -it --rm -p 8080:80 -v "$(PWD):/data/html" -v "$(PWD)/nginx.conf:/etc/nginx/nginx.conf" nginx:latest
