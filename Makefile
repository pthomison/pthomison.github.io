mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

serve: pack
	docker run -it --rm -p 8080:80 -v "$(PWD):/data/html" -v "$(PWD)/nginx.conf:/etc/nginx/nginx.conf" nginx:latest

.image:
	docker build . -t webpack -f webpack.dockerfile
	touch .image

webpack-bash: .image
	docker run -it --rm -v $(PWD):/hacking webpack:latest

pack: .image node_modules
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	npx webpack

lint: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	npx eslint ./src/

node_modules: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	npm install

shell: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	/bin/bash

clean:
	rm -rf ./node_modules/ || true
	docker rmi webpack || true
	rm -rf ./dist/ || true
	rm ./.image || true