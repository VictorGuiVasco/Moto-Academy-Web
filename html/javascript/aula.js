const array = ["Victor", "Guilherme", "Cavalcante", "De", "Vasconcelos"];

const obj = {
  name: "victor",
  idade: 21,
  endereço: {
    bairro: "---",
    rua: "---",
    numero: 0,
  },
  hobs: ["trabalhar", "trabalhar mais", "trabalhar muito"],
  acao: function () {
    console.log(obj.hobs[1]);
  },
};

// obj.acao();
// console.log(obj);

// for (let i = 0; i < 4; i++) {
//   console.log(i);
//   if (i == 2) return;
// }

const date = new Date();
console.log(date);
