# Debug this code to pass rspec! There is 1 mistake to fix.

# Write a method, fuzz_buzz, that accepts a number as an arg.
# The method should return an array of numbers from one to the given number that are not divisible by 3 or 5.

require "byebug"

def fuzz_buzz(num)
  # example of difference between a common mistake
  # i = 3
  # i % 3 != 0 || i % 5 != 0  => true
  # !(i % 3 == 0 || i % 5 == 0) => false
  (1..num).select do |n|
    !(n % 3 == 0 || n % 5 == 0)
  end
end

# DeMorgan's Law
# when distributing a ! across an expression, you should flip operation
# !(A || B) == !A && !B
# !(A && B) == !A || !B