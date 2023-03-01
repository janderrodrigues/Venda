//DADOS DO CLIENTE
const cliente = {
    nome: "Jander",
    idade: 21,
    email: "jander123@hotmail.com",
    CPF: "90720303893",
    RG: "380064625",
};
//ESTE COMANDO MOSTRA TODOS OS DADOS DO CLIENTE
console.log(cliente);
//CONSEGUIMOS MOSTRAR APENAS OS DADOS QUE NOS INTERESSA
console.log(`O nome do cliente é ${cliente.nome}, possui ${cliente.idade} e seu RG é ${cliente.RG}`);
//CONSEGUIMOS TAMBÉM ACESSAR OS VALORES DE CADA DADO
console.log(`Os 3 primeiros números do CPF de ${cliente.nome} é ${cliente.CPF.substring(0, 3)}`);





//PAGAMENTOS
const cliente2 = {
  nome: "Jander",
  idade: 21,
  email: "jander-rodrigues@hotmail.com",
  CPF: "90720303893",
  RG: "380064625",
  saldo: 200,
  //FUNÇÃO PARA EFETUAR UM PAGAMENTO
  efetuaPagamento: function (valor) {
    if (valor > this.saldo)
    {console.log("Saldo insuficiente");}
    else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Saldo atual de ${this.saldo}`);
    }
  }
}

//SALDO APÓS A COMPRA DO CLIENTE
cliente2.efetuaPagamento(100);





//PODEMOS TAMBÉM ACRESCENTAR UM OBJETO DENTRO DE UM ARRAY, DECLARANDO A VARIÁVEL E ADICIONANDO UM "."
  cliente2.enderecos = [{
    rua: "R. João Alarte",
    numero: 440,
    local: "Casa",
    complemento: "_",
  }];
  
  
  
  
  
  //CONFIRMAÇÃO DE ENDEREÇO PARA ENTREGA DE PRODUTO
const chaveObjeto = Object.keys(cliente2);
console.log(chaveObjeto);
//O PREENCHIMENTO DE UM ENDEREÇO É OBRIGATÓRIO PARA A ENTREGA DO PRODUTO
if (!chaveObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}
else {
  console.log(`enviando para o endereço cadastrado`)
}





//ENTRANDO EM CONTATO COM O CLIENTE
const cliente3 = {
  nome: "Mariane",
  idade: 22,
  telefone: ["11998256488", "1132250014"]
}
cliente3.endereco = [{
  rua: "R. Mario Libão",
  numero: 558,
  local: "Apartamento",
  complemento: "bloco 3, ap 114",
}]
function ligandoParaCliente(telefone0, telefone1){
  console.log(`Ligando para ${telefone0}`);
  console.log(`Ligando para ${telefone1}`);
}
ligandoParaCliente(...cliente3.telefone);
//DADOS DE ENVIO DO PRODUTO
const encomenda = {
destinatario: cliente3.nome,
...cliente3.endereco[0],
}
console.log(encomenda);