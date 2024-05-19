.PHONY: dev
dev:
	npm run dev

.PHONY: install
install:
	npm install
	npm i --save bootstrap bootstrap-icons @popperjs/core
	npm i --save-dev sass

.PHONY: build
build:
	npm run build