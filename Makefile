mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

docker_serve:
	docker run \
	-it --rm \
	-p 8080:8080 \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	make serve

serve:
	npx webpack serve \
		--compress \
		--static-serve-index \
		--static-directory ./docs \
		--no-hot \
		--no-client-overlay-warnings \
		--client-progress

.image:
	docker build . -t webpack -f webpack.dockerfile
	touch .image

webpack-bash: .image
	docker run -it --rm -v $(PWD):/hacking webpack:latest

docker_pack: .image docker_node_modules
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	make pack

pack:
	npx webpack
	unzip -u ./favicon_io.zip -d ./docs/favicon

docker_lint: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	make lint

lint:
	npx eslint ./src/

docker_node_modules: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	webpack:latest \
	make node_modules

node_modules:
	npm install

shell: .image
	docker run \
	-it --rm \
	-v $(PWD):/hacking \
	-w /hacking \
	-p 8080:8080 \
	webpack:latest \
	/bin/bash

clean-all: clean clean-deps clean-images

clean:
	rm -rf ./docs/ || true

clean-deps:
	rm -rf ./node_modules/ || true

clean-images:
	docker rmi webpack || true
	rm ./.image || true