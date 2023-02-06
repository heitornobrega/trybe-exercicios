def calcula_desconto(litros: float, combustivel: str, desconto: float):
    if combustivel == "A":
        preco_combustivel = 1.90
    else:
        preco_combustivel = 2.50

    valor_sem_desconto = litros * preco_combustivel
    valor_a_descontar = valor_sem_desconto * desconto
    valor_final = valor_sem_desconto - valor_a_descontar
    return valor_final


def valor_combustivel(litros: float, combustivel: str):
    if combustivel == "A":
        if litros > 20:
            valor = calcula_desconto(litros, combustivel, 0.05)
            print(
                f"Para {litros} litros de Álcool, \
                ganha 5% de desconto e o valor final é {valor}"
            )
        else:
            valor = calcula_desconto(litros, combustivel, 0.03)
            print(
                f"Para {litros} litros de Álcool, \
                ganha 5% de desconto e o valor final é {valor}"
            )
    elif combustivel == "G":
        if litros > 20:
            valor = calcula_desconto(litros, combustivel, 0.06)
            print(
                f"Para {litros} litros de Gasolina, \
                ganha 5% de desconto e o valor final é {valor}"
            )
        else:
            valor = calcula_desconto(litros, combustivel, 0.04)
            print(
                f"Para {litros} litros de Gasolina, \
                ganha 5% de desconto e o valor final é {valor}"
            )


valor_combustivel(50, "G")
