"""entrada = [ 0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0 ]

resultado para (0, 4) = True
resultado para (1, 1) = False"""

array_bi_dimensional = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
]


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True
    return False


print(battleship(array_bi_dimensional, 0, 4))
# A complexidade dessa função é da ordem O(1),
# isso porque ela simplesmente acessa um elemento específico da matriz,
# atravéz de uma operação de tempo constante. Ou seja, o tempo de execução,
# não depende do tamanho da matriz.
# em termos de complexidade de espaço também é O(1), pois o resultado ocupará
# sempre o mesmo tamanho na memória.
