# Variáveis para facilitar a manutenção
APP_NAME = workout_api
DOCKER_COMPOSE = docker-compose

.PHONY: run create-migrations run-migrations run-docker stop-docker help

run:
	@uvicorn $(APP_NAME).main:app --reload

run-docker:
	@$(DOCKER_COMPOSE) up -d

stop-docker:
	@$(DOCKER_COMPOSE) down

create-migrations:
	@PYTHONPATH=. alembic revision --autogenerate -m "$(d)"

run-migrations:
	@PYTHONPATH=. alembic upgrade head

help:
	@echo "Comandos disponíveis:"
	@echo "  make run               - Inicia a API FastAPI com reload"
	@echo "  make run-docker        - Sobe o banco Postgres 16 no Docker"
	@echo "  make stop-docker       - Para os containers do Docker"
	@echo "  make create-migrations d='nome' - Cria uma nova migração"
	@echo "  make run-migrations    - Aplica as migrações no banco"