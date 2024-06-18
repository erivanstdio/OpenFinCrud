# OpenFinCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Docker build

Run `docker build -t {container_name} .`
It will install Node v16.14.2 and Angular CLI v15.0.0 on a container with your desired name (don't forget to name it!).

After this, run the container
Run `docker run -d -p 80:80 {container_name}`

check if it is running:
`docker ps`

Finally, open your browser on [localhost](http://localhost:80).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Extra: Lista de atividades desempenhadas e TODO

## 15/06 
Recebi o teste às 18:00 e a partir disso fiz a leitura do documento do teste e comecei minhas pesquisas baseadas nos requisitos.
Dei de cara com a obrigatoriedade de utilizar Angular, e bem... inicialmente eu planejava fazer um projeto mobile junto, mas como eu tava meio enferrujado pra Web e nunca tinha utilizado esse framework (vim de 4 anos de React Native e alguns usos esporádicos de React), tive que estudar um pouco. Utilizei a noite de sexta pra isso e o dia de sábado pra isso.

## 16/06
Hands on, comecei a escrever o código, adicionando os componentes que eu julgava principais à aplicação e seus serviços. Finalizei no primeiro dia toda a parte de serviços pra finalmente começar a desenhar as telas.

## 17/06
Agora buscando inspirações em sites como dribbble e também observando a página da teddy digital, comecei a desenhar as telas. Utilizei Material UI pra deixar alguns componentes modernos sem perder muito tempo (no dia a dia prefiro fazer meus próprios componentes utilizando CSS puro). Comecei com a página de Login e em seguida fiz uma toolbar para a Home e adicionei tabelas nas páginas de listas.
A priori eu optei por fazer uma página para cada serviço, mas pra melhorar a interface e a experiência do usuário eu decidi transformar as páginas de formulário em simples caixas de diálogo. Ficou bem mais bonito quando utilizei algumas imagens.

## 18/06
Pra finalizar, corrigi alguns errinhos de lógica e finalizei a tela de sobre, o Dockerfile e este ReadMe.

TODO:

Redirecionamento para página da tabela ao acessar link enviado. (Checando se o usuário está autenticado);
Deploy via Vercel/Github Pages.





