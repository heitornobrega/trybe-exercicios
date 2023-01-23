def valida_email(email : str):
    user = email.split('@')[0].isalpha()
    nome_site = email.split('@')[1].split('.')[0].isalpha()
    extensao = email.split('@')[1].split('.')[1].isalpha() and len(extensao) <= 3
    if (user and nome_site and extensao):
        return 'Email válido'
    else:
        raise ValueError("Valor inválido")



valida_email('nobheitor@gmail.com5')
