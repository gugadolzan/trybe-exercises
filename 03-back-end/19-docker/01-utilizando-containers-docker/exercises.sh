# Baixe a imagem da Distribuição Linux Debian utilizando a tag:stable-slim
docker pull debian:stable-slim

# Crie e execute um container no modo interativo utilizando essa imagem como referência
docker container run -it debian:stable-slim

# Solução alternativa
docker container create -it debian:stable-slim
docker container start <CONTAINER ID>

# Rode o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container
cat /etc/*-release

# Encerre o terminal
exit

# Verifique na sua lista de containers, qual o container é referente ao exercício que acabou de praticar
docker container ls -a

# Inicie o mesmo container novamente, sem criar outro
docker container start <CONTAINER ID || NAMES>

# Retome o container que foi criado anteriormente
docker container attach <CONTAINER ID || NAMES>

# Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container
cat /etc/debian_version

# Encerre o terminal
exit

# Remova somente o container criado para esse exercício
docker container rm <CONTAINER ID || NAMES>
