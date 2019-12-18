# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

def coprime?(num_1, num_2)
  # iterate through greater input argument
  # start iterating from 2, as 1 is every number's common divisor
  # none, are none of these divisors a common divisor between the two number arguments
  (2..num_2).none? { |divisor| num_1 % divisor == 0 && num_2 % divisor == 0 }
end

# 25 => [5, 25]
# 12 => [2, 3, 4, 6, 12 ]
# none are common so true

p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false
