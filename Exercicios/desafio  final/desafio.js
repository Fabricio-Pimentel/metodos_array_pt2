const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarUsuarios = usuarios.map ((c) => `Nome: ${c.nome} , Cargo: ${c.cargo}`);

console.log ("Lista resumida:", listarUsuarios);
console.log("\n")

const buscarUsuarioPorId = usuarios.find ((c) => c.id === 4);

console.log("Buscar ID:", buscarUsuarioPorId);
console.log("\n")

const listarUsuariosAtivos = usuarios.filter ((c) => c.ativo);

console.log("Usuários ativos:", listarUsuariosAtivos);
console.log("\n")

const existeUsuarioInativo = usuarios.some ((c) => c.ativo);

console.log("Há pelo menos um usuário inativos?", existeUsuarioInativo);
console.log("\n")

const todosUsuariosMaioresDeIdade = usuarios.every ((c) => c.idade >= 18)

console.log("Todos usuários são maiores de idade?", todosUsuariosMaioresDeIdade);
console.log("\n")

const calcularMediaIdade = usuarios.reduce ((soma, c) => soma + c.idade, 0) / usuarios.length;

console.log("Média das idades:", calcularMediaIdade);