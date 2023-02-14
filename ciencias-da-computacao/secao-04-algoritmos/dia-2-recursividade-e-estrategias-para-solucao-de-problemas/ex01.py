def contagem(n):
    c = 0
    for idx, num in enumerate(range(0, n)):
        if num % 2 == 0:
            c += 1
    return c


print(contagem(10))
