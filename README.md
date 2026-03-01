# 🏋️‍♂️ WorkoutAPI - Competição de Crossfit (High Performance)

* **Quem é o FastAPI?**
  
  Framework de alta performance, fácil de aprender e pronto para produção. Baseado em type hints do Python, ele permite uma construção rápida e segura.

* **Async & Performance**

  Código assíncrono significa que o programa pode esperar por operações de I/O (como banco de dados) sem travar a execução. No meu ambiente, utilizei o Python 3.14 no Apple Mac mini M4, extraindo o máximo de vazão de rede e processamento.

## 🛠️ Stack da API (Modernizada)

Diferente da versão original (Python 3.11/Postgres 11), esta implementação utiliza:

* **Python 3.14:** Versão de vanguarda para testes de performance.

* **PostgreSQL 16:** Otimizado para arquitetura ARM64 (M4) via Docker.

* **FastAPI + Pydantic v2:** Serialização de dados até 20x mais rápida.

* **SQLAlchemy 2.0 + asyncpg:** Driver assíncrono de alta performance.

* **Índices de Banco:** Implementação de índices B-Tree nos campos nome e cpf.

* **📊 Modelagem de Entidade e Relacionamento - MER**

## 🚀 Como Executar (Ambiente M4)

### 1. Ambiente Virtual

Em vez do pyenv, utilizamos o venv nativo para garantir compatibilidade com o Python 3.14:

```Bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Infraestrutura (Docker)

Para subir o banco de dados Postgres 16:

```Bash
make run-docker
```

### 3. Banco de Dados (Alembic)

Para criar as tabelas e índices:

```Bash
make run-migrations
```

### 4. Execução

Para subir a API:

```Bash
make run
```

Acesse: <http://127.0.0.1:8000/docs>

## ✅ Desafios Implementados (Requisitos DIO)

[`x`] Query Parameters: Filtros por nome (ilike) e cpf.

[`x`] Custom Response: GET de atletas retorna apenas Nome, CT e Categoria.

[`x`] Integrity Control: Tratamento de IntegrityError com Status 303 para CPFs duplicados.

[`x`] Paginação: Implementação de fastapi-pagination com suporte a Limit/Offset.

Desenvolvido por `Cristiano` - Estudante de Redes de Computadores no SENAI São Caetano.
