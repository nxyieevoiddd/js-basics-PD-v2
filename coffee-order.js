function getCoffeePrice(coffeeSize, addSugar) {
  let price = 0;
  if (coffeeSize === "small") price = 1;
  else if (coffeeSize === "medium") price = 1.5;
  else if (coffeeSize === "large") price = 2;
  if (addSugar) price += 0.2;
  console.log(`Cena par ${coffeeSize} kafiju${addSugar ? " ar cukuru" : ""}: ${price} EUR`);
}

getCoffeePrice("large", true);
getCoffeePrice("small", false);
