serve: node_modules
	npx webpack serve \
		--compress \
		--static-serve-index \
		--static-directory ./docs \
		--no-hot \
		--no-client-overlay-warnings \
		--client-progress

build: node_modules
	npx webpack
	unzip -u ./favicon_io.zip -d ./docs/favicon

serve-build:
	cd docs && python3 -m http.server 8080

lint: node_modules
	npx eslint ./src/

node_modules:
	npm install

clean-all: clean clean-deps

clean:
	rm -rf ./docs/ || true

clean-deps:
	rm -rf ./node_modules/ || true
