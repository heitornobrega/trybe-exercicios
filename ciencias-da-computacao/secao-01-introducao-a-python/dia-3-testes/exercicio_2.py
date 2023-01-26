def phone_number(expression):
    letters_to_numbers = {
        'ABC': '2',
        'DEF': '3',
        'GHI': '4',
        'JKL': '5',
        'MNO': '6',
        'PQRS': '7',
        'TUV': '8',
        'WXYZ': '9'
    }
    phone_number = ""
    for char in expression:
        if char.isalpha():
            char_found = False
            for key, value in letters_to_numbers.items():
                if char in key:
                    phone_number += value
                    char_found = True
                    break
            if not char_found:
                raise ValueError(f"Invalid character {char}")
        elif char in '-01':
            phone_number += char
    return phone_number

print(phone_number("1-HOME-SWEET-HOME"))
print(phone_number("MY-MISERABLE-JOB"))
