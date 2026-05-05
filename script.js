class parquimetro {
    constructor(){
        this.valor = 0
        this.tempo = 0
        this.troco = 0
    }

    definirTempo(valor) {
        if (valor < 1) {
            this.valor = 0
            this.tempo = 0
            return
        }

        if (valor >= 1 && valor < 1.75) {
            this.tempo = 30
        }

        if (valor >= 1.75 && valor < 3) {
            this.tempo = 60
        }

        if (valor >= 3) {
            this.tempo = 120
        }
    }

    calcularTroco(valor){
        if (this.tempo == 30) {
            this.troco = valor - 1
        }

        if (this.tempo == 60) {
            this.troco = valor - 1.75
        }

        if (this.tempo == 120) {
            this.troco = valor - 3
        }
    }
}

function calculo() {
    const meuParquimetro = new parquimetro()
    let valor = parseFloat(document.getElementById('valor').value);

    if (valor <1 || isNaN(valor)){
        document.getElementById('resultado').textContent = ("Por favor, digite um numero válido, consulte nossos planos")
        document.getElementById('troco').textContent = ('')
        return
    }
    
    meuParquimetro.definirTempo(valor)
    meuParquimetro.calcularTroco(valor)

    document.getElementById('resultado').textContent = (`seu tempo é de ${meuParquimetro.tempo} minutos`)
    if (meuParquimetro.troco == 0) {
        document.getElementById('troco').textContent = ('Você não possui troco')
    } else {
        document.getElementById('troco').textContent = (`Seu troco é de R$ ${meuParquimetro.troco.toFixed(2).replace('.' , ',')}`)
    }

    document.getElementById('valor').value = ''
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        calculo()
    }
})