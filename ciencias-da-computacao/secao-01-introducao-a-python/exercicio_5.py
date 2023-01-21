def paint_budget(area_to_paint: float):
    ink_efficiency = 3
    amount_in_a_can_of_paint = 18
    amount_necessary = area_to_paint / ink_efficiency
    number_of_cans = amount_necessary / amount_in_a_can_of_paint
    can_price = 80
    total_price = can_price * number_of_cans
    result = (number_of_cans, total_price)
    return result


print(paint_budget(120))
