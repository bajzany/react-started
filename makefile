prepare:
	@true
build: prepare
	@docker-compose up --build
exec: prepare
	@docker exec -it react_started ash
up: prepare
	@docker-compose up
