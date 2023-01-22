def media_aritimetica_lista(lista: list):
    c = 0
    soma = 0
    while c < len(lista):
        soma += lista[c]
        c += 1
    return f"A média dessa lista é: {soma / len(lista)}"


print(media_aritimetica_lista([5, 5, 5]))
