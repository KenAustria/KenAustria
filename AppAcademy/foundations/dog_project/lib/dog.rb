class Dog
  attr_reader :name, :breed, :age, :favorite_foods

  def initialize(name, breed, age, bark, favorite_foods)
    @name = name
    @breed = breed
    @age = age
    @bark = bark
    @favorite_foods = favorite_foods
  end

  def age=(new_age)
    @age = new_age
  end

  def bark
    @age > 3 ? @bark.upcase : @bark.downcase
  end

  def favorite_food?(item)
    # make sure the elements of favorite_foods, is the same capitalization as the item we're looking for
    @favorite_foods.map(&:downcase).include?(item.downcase)
  end
end
