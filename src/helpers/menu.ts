import { inputNumber } from "../utlis/prompt"

const printMenu = () => {
  console.log(`\n------------- CARLOCA -------------\n`)

  console.log(`
    1.................. Cadastrar CARRO\n
    2.................. Cadastar CLIENTE\n
    3.................. aluguel CARRO\n
    4.................. devolução CARRO\n
    0.................. SAIR
    `)
}

const menu = () => {
  let rodando = true

  do {
    console.clear()
    printMenu()
    const escolha = inputNumber("Escolha uma opção: ")

    switch (escolha) {
      case 1: {
        break
      }
      case 2: {
        break
      }
      case 3: {
        break
      }
      case 4: {
        break
      }
      case 0: {
        console.log("saindo...")
        rodando = false
        break
      }
      default:
        console.log("valor invalido! tente novamente")
    }
  } while (rodando)
}

export default menu
