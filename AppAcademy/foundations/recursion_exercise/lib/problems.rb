# # Write a method, pow(base, exponent), that takes in two numbers.
# # The method should calculate the base raised to the exponent power.
# # You can assume the exponent is always positive.
# # Solve this recursively!

def pow(base, exponent)
  return 1 if exponent == 0
  base * pow(base, exponent-1)
end

# # pow(2, 5) = 2 * pow(2, 4)
# # pow(2, 4) = 2 * pow(2, 3)
# # pow(2, 3) = 2 * pow(2, 2)
# # pow(2, 2) = 2 * pow(2, 1)
# # pow(2, 0) = 1

# p pow(2, 0) # => 1
# p pow(2, 1) # => 2
# p pow(2, 5) # => 32
# p pow(3, 4) # => 81
# p pow(4, 3) # => 64
#===========================================================


# # Write a method, lucas_number(n), that takes in a number.
# # The method should return the n-th number of the Lucas Sequence.
# # The 0-th number of the Lucas Sequence is 2.
# # The 1-st number of the Lucas Sequence is 1
# # To generate the next number of the sequence, we add up the previous two numbers.
# # For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
# # Solve this recursively!

def lucas_number(n)
  return 2 if n == 0 #The 0-th number of the Lucas Sequence is 2.
  return 1 if n == 1 #The 1-st number of the Lucas Sequence is 1
  # if n is greater than 2, calculate recursively
  lucas_number(n - 1) + lucas_number(n - 2)
end

# # lucas_number(5)
# # lucas_number(4) + lucas_number(3) => 7
# # sequence 2, 1, 3, 4, (7), 11

# p lucas_number(0)   # =>    2
# p lucas_number(1)   # =>    1
# p lucas_number(2)   # =>    3
# p lucas_number(3)   # =>    4
# p lucas_number(5)   # =>    11
# p lucas_number(9)   # =>    76
#===========================================================


# Write a method, sum_array(array), that takes in an array of numbers.
# The method should return the total sum of the elements.
# Solve this recursively!
# Examples:
# sum_array([])             # => 0
# sum_array([5])            # => 5
# sum_array([5, 2])         # => 7
# sum_array([4, 10, -1, 2]) # => 15
# def sum_array(array)
#   return 0 if array.empty?
#   array[0] + sum_array[array[1..-1]]
# end
def sum_array(array)
  return 0 if array.empty?
  array.pop + sum_array(array)
end
 # sum_array([4, 10, -1, 2])
 # 2 + sum_array([4, 10, -1])
 # 2 + (-1) + sum_arr([4,10])
 # 1 + (10) + sum_arr([4])
 # 11 + 4 + sum_arr([]) => return 0 if array.empty?
 # 15
#===========================================================


# Write a method, reverse_string(str), that takes in a string.
# The method should return the string with it's characters in reverse order.
# Solve this recursively!

def reverse_string(str)
  return "" if str.empty?
  reverse_string(str[1..-1]) + str[0]
end

# def reverse_string(str)
#   return "" if str == ""
#   str[-1] + reverse_string(str[0..-2])
# end

 # "friends"
 # "s" + reverse_string("friend")
 # "sd" + reverse_string("frien")
 # "sdn" + reverse_string("frie")
 # "sdne" + reverse_string("fri")
 # "sdnei" + reverse_string("fr")
 # "sdneir" + reverse_string("f")
 # "sdneirf" + reverse_string("")
 # "sdneirf" + ""
 # "sdneirf"

p reverse_string("")            # => ""
p reverse_string("c")           # => "c"
p reverse_string("internet")    # => "tenretni"
p reverse_string("friends")     # => "sdneirf"
#===========================================================


# A 1-dimensional array is also known as a flattened array.
# Write a method, flatten(data), that accepts a single argument. The
# method should take in an array of any dimension and return the flattened
# version of that array. Solve this recursively.

# Hint:
#  - if the argument is not an array, then we have reached the base case
#  - look up the documentation for how to check if data is an array or not

# Another Hint:
# From the last example, you may be confused. We said that the method takes
# in an array as an arg, but we passed it a string?
# If data is not an array, then we can consider it as a 0-dimensional array.
#     0-dimensional array: 'some data'
#     1-dimensional array: ['some data']
#     2-dimensional array: [['some data']]
#     3-dimensional array: [[['some data']]]

def flatten(data)
  return [data] if !data.is_a?(Array) # if argument is not an array, return the flattenned version

  flattened = [] # host array
  data.each do |ele|
    flattened += flatten(ele) # flatten every element, then add to host arr
  end
  flattened
end

# Examples:
# array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
# p flatten(array_1)      # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
#
# array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
# p flatten(array_2)      # => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
#
# p flatten('base case')  # => [ 'base case' ]

