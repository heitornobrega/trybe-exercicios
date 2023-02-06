def get_biggest_name(names: list):
    for index, name in enumerate(names):
        if len(name) > len(names[index - 1]):
            biggest = name
    print(biggest)


get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
