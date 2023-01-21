def paint_budget(area_to_paint: float):
    ink_efficiency = 3
    amount_in_a_can_of_paint = 18
    amount_necessary = area_to_paint / ink_efficiency
    number_of_cans = amount_necessary / amount_in_a_can_of_paint
    return number_of_cans


print(paint_budget(120))
