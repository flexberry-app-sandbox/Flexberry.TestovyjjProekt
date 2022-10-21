docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testovyjjproekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testovyjjproekt/app ../..
