import pytest

from exercicio_1 import retorna_sequencia_de_numeros

def test_is_when_number_is_divisible_by_three():
    'Testa numeros divisíveis por 3 são substituidos por fizz'
    sequencia = retorna_sequencia_de_numeros(5)
    assert sequencia[2] == 'Fizz'

def test_is_when_number_is_divisible_by_5():
    'Testa numeros divisíveis por 5 são substituidos por Buzz'
    sequencia = retorna_sequencia_de_numeros(5)
    assert sequencia[-1] == 'Buzz'

def test_is_when_number_is_divisible_by_5_and_3():
    'Testa numeros divisíveis por 5 e 3são substituidos por FizzBuzz'
    sequencia = retorna_sequencia_de_numeros(16)
    assert sequencia[-2] == 'FizzBuzz'

def test_if_the_function_return_a_expected_list():
    'Testa se a função é capaz de retornar a lista esperada'
    expected_list = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]
    sequencia = retorna_sequencia_de_numeros(16)
    assert sequencia == expected_list

