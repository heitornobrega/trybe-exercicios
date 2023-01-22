import json
import csv
from collections import Counter

with open("books.json", "r") as books_file:
    books = json.load(books_file)

raw_categories = []

for book in books:
    categorie = book["categories"]
    for categorie_name in categorie:
        raw_categories.append(categorie_name)

categories_quantity = Counter(raw_categories)

for key, value in categories_quantity.items():
    categories_quantity[key] = (int(value) * 100) / len(raw_categories)

with open("categories_quantity.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)
    headers = ["Category", "Quantity (%)"]
    writer.writerow(headers)

    for key, value in categories_quantity.items():
        row = [key, value]
        writer.writerow(row)
