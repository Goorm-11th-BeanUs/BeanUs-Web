IMAGE_NAME = coffee-garbage-client
TAG = latest

build:
	docker build --progress=plain -t $(IMAGE_NAME):$(TAG) .

run: build
	docker run -it --rm -p 5173:5173 $(IMAGE_NAME):$(TAG)