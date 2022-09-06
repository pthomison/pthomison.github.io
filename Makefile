NPM_IMAGE=node:18.8.0

DOCKER_CMD=docker run -it --rm -v $(PWD):/hacking -p 8080:8080 -w /hacking $(NPM_IMAGE)

docker_serve:
	$(DOCKER_CMD) make serve

serve: node_modules
	npx webpack serve \
		--compress \
		--static-serve-index \
		--static-directory ./docs \
		--no-hot \
		--no-client-overlay-warnings \
		--client-progress

docker_pack: node_modules
	$(DOCKER_CMD) make pack

pack: node_modules
	npx webpack
	unzip -u ./favicon_io.zip -d ./docs/favicon

docker_lint:
	$(DOCKER_CMD) make lint

lint: node_modules
	npx eslint ./src/

node_modules:
	$(DOCKER_CMD) npm install

shell:
	$(DOCKER_CMD) /bin/bash

clean-all: clean clean-deps

clean:
	rm -rf ./docs/ || true

clean-deps:
	rm -rf ./node_modules/ || true
