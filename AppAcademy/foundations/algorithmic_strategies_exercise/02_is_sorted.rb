require "byebug"

Write a method, is_sorted(arr), that accepts an array of numbers as an arg.
The method should return true if the elements are in increasing order, false otherwise.
Do not use the built-in Array#sort in your solution :)

# def is_sorted(arr)
#   # 0..arr.length, includes last element
#   # 0...arr.length, does not include last element
#   # 0...arr.length - 1, to stay in range, prevent out of bounds
#   (0...arr.length-1).each do |num|
#     return false if arr[num] > arr[num+1]
#   end

#   true
# end
def is_sorted(arr)
  #double-dot range gives Argument Error, why?
  (0..arr.length-1).each do |i|
    # i > i + 1 => returns true for 3 examples
    # if arr = [a, b, c]
    # i = 0, arr[i] = a
    return false if i > i+1
  end
  true
end

p is_sorted([1, 4, 10, 13, 15])       # => true
p is_sorted([1, 4, 10, 10, 13, 15])   # => true
p is_sorted([1, 2, 5, 3, 4 ])         # => false
