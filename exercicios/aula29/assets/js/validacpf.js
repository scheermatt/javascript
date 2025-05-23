// 705.484.450-52 // 070.987.720-03 //

/*


7X  0X 5X 4X 8X 4X 4X 5X 0X
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0

11 -  (237 % 11) = 5 (Primeiro dígito)
if digito > 9 = 0

7X  0X 5X 4X 8X 4X 4X 5X 0X 5X
11  10 9  8  7  6  5  4  3  2
70  0  45 32 56 24 20 20 0  10

11 -  (284 % 11) = 2 (Segundo dígito)
if digito > 9 ? 0



let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);

console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}
ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); 
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};
const cpf = new ValidaCPF('705.484.450-52');
if(cpf.valida()) {
    console.log('CPF VÁLIDO');
} else {
    console.log('CPF INVÁLIDO');
}
