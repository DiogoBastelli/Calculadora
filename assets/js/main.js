function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert('conta invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e){
                alert('conta invalida');
                return;
            }
        },

        apaga1(){
            this.display.value =  this.display.value.slice(0,-1);
        },

        clearDisplay(){
            this.display.value = ''; 
        },

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup' , e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click' , function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apaga1();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();