def retorna_sequencia_de_numeros(n):
    lista = []
    for num in range(1, n + 1):
        if num % 15 == 0:
            num = "FizzBuzz"
        elif num % 3 == 0:
            num = "Fizz"
        elif num % 5 == 0:
            num = "Buzz"
        lista.append(num)
    return lista

print(retorna_sequencia_de_numeros(16))