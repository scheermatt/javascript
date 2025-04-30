// `${dia da semana}, ${dia} de ${mês} de ${ano} ${horário}`
/* 
const h1 = document.querySelector('#h1');
const h1Hora = document.querySelector('#h1Hora');
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;      
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }   
}
function getMesTexto(mes) {
    let mesTexto;
    switch (diaSemana) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;      
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;     
        case 10:
            mesTexto = 'novembro';
            return mesTexto;    
        case 11:
            mesTexto = 'dezembro';
            return mesTexto;             
        default:
            mesTexto = '';
            return mesTexto;
    }   
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

const mesTexto = getMesTexto(mes);
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// console.log(`${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${min}`);

h1.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}.`;
h1Hora.innerHTML = `${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`; 
*/

const h1 = document.querySelector('#h1');

h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())