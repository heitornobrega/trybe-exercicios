def is_a_triangle(l1: float, l2: float, l3: float):
    is_triangle = l1 + l2 > l3 and l2 + l3 > l1 and l1 + l3 > l2
    if is_triangle:
        if l1 == l2 == l3:
            print("Triângulo equilátero")
        elif (l1 == l2) or (l2 == l3) or (l3 == l1):
            print("Tringulo Isósceles")
        else:
            print("Triangulo Escaleno")
    else:
        print("Não é triângulo!")


is_a_triangle(1, 5, 1)  # Não é triângulo!
is_a_triangle(2, 2, 2)  # Equilátero
is_a_triangle(2, 2, 3)  # Isósceles
is_a_triangle(3, 3, 2)  # Isósceles
is_a_triangle(3, 2, 3)  # Isósceles
is_a_triangle(5, 2, 3)  # Escaleno
