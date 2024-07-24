function Calculadora(){

    this.display = document.querySelector('.display');

    this.inicia = ()=>{
        this.cliqueBotoes();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click' , e =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if(el.classList.contains('btn-clear')) this.clearDisplay();

            if(el.classList.contains('btn-del')) this.apaga1();

            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.btnParaDisplay = (valor)=> this.display.value += valor;
    this.apaga1 = () => this.display.value =  this.display.value.slice(0,-1);
    this.clearDisplay = () => this.display.value = '';

    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta);
        } catch(e){
            alert('conta invalida');
            return;
        }
    };
};

const calculadora = new Calculadora();
calculadora.inicia();