# range => fix recursive version
# exponentiation => fix base value for example
# deep_dup WORKS!
# fibonacci WORKS!
# bsearch WORKS!
# merge_sort WORKS!
# subsets
# permutations
# greedy_make_change


# iteration
def range(start_range, end_range)
  return [] if end_range < start_range
  host_arr = []
  (start_range...end_range).each { |num| host_arr << num }
  host_arr
end
p range(1, 5) #=> [1, 2, 3, 4]

# recursion
def range(start_range, end_range)
  return [start_range] if start_range == end_range
  return [] if end_range < start_range
  p range(start_range, end_range - 1 ) << end_range
end
p range(1, 5) #=> [1, 2, 3, 4, 5] WRONG!
range(1, 5 - 1) << 5
  range(1, 4 - 1) << 4
    range(1, 3 - 1) << 3
      range(1, 2 - 1) << 2
        range(1, 1 - 1) << 1

#====================================================================

def exponentiation(base, exponent)
  exponent == 0 ? 1 : (base * exponentiation(base, exponent - 1))
end
p exponentiation(1, 256) #FIX BASE CASE to satisfy example below
# exponent == 0 ? => false => 0 * 255
  # exponent == 0 ? => false => 0 * 254
    # exponent == 0 ? => false => 0 * 253
      # ...
        # 0 == 0 ? true => 1

#====================================================================

class Array
  def deep_dup
    host_arr = []
    self.each do |el|
      if el.is_a?(Array)
        host_arr << el
      else
        host_arr << [el]
      end
    end
  end
  # [1, [2], [3, [4]]]
end

#====================================================================

# RECURSION
def fibonacci(n)
  return [] if n <= 0
  return [0] if num == 1
  return [0, 1] if num == 2

  fibonacci(n - 1) << fibonacci[n - 1] + fibonacci[n - 2]
end
# fibonacci(3)
# fibonacci(n - 1) << fibonacci[n - 1] + fibonacci[n - 2]
# 2                <<    1             + 0
# [0, 1]           <<    1             + 0
# => [0, 1, 1]


# ITERATION
def fibonacci(n)
  fibos = [0, 1]
  return [] if n <= 0
  return [0] if num == 1

  while fibos.length < n
    fibos << fibos[-1] + fibos[-2]
  end

  fibos
end

#====================================================================

def bsearch(array, target)
  #base case
  return nil if array.empty?
  #the entire array has been searched (and "not found" is returned)
  return nil if array.length == 1 && array[0] != target

  # find midpoint
  sorted = array.sort
  midpoint = sorted.length / 2

  #recursion
  n = target <=> sorted[midpoint]
  case n
  when -1 # when target < midpoint, search left side
    bsearch(sorted[0..(midpoint - 1)], target)
  when 1 # when target > midpoint, search right side
    index = bsearch(sorted[(midpoint + 1)..-1], target)
    if index != nil
      return midpoint + index + 1
    end
  else # n = 0, found
    return midpoint
    # puts "Midpoint is found at #{midpoint}"
  end
end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

#====================================================================

#https://stackoverflow.com/questions/31351393/recursive-merge-sort-in-ruby
class Array
  def merge_sort
    #base case
    return self if self.length <= 1

    # find midpoint
    midpoint = self.length / 2

    #recursion
    merge(self[0..midpoint - 1], self[midpoint..-1])
  end

  def merge(left_arr, right_arr)
    host_arr = []
    until left_arr.length == 0 || right_arr.length == 0
      host_arr << left[0] <= right[0] ? left.shift : right.shift
    end
  end
end

#====================================================================

def subsets(array)
  return [[]] if array.empty?

  sub_arr = subsets(array.take(array.length - 1))
  main_arr = sub_arr.map { |sub| sub + [array.last] }
  sub_arr + main_arr
end

p subsets([]) # => [[]]
p subsets([1]) # => [[], [1]]
p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
p subsets([1, 2, 3]) # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

#====================================================================

def permutations(array)
end

permutations([1, 2, 3])

#====================================================================

def greedy_make_change

end