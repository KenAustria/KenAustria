def range(start, last)
  return [1] if last < start
  rangearray = range(start, last - 2)
  rangearray << rangearray[-1] + 1
  rangearray
end

# p range(1, 5)
#rangearray(1,3) rangearray(1,2) rangearray(1,1) ragearray(1,0)
#[1,2,3,4]          [1,2,3]          1,2]           [1]

##############################################

def sum(array)
  return 0 if array.empty?
  array.first + sum(array[1..-1])
end

#p sum ([1, 2, 3, 4])

def sum_iteratively(array)
  sum = 0
  array.each do |el|
    sum += el
  end
  sum
end

# p sum_iteratively([1, 2, 3, 4])

##############################################

def exp(b, n)
  return b if n == 1
  b * exp(b, n - 1)
end

# p exp(2, 3)

def exp_2(b, n)
  return 1 if n == 0
  return b if n == 1

  if n.even?
    exp_2(b, n / 2) ** 2
  else
    b * (exp_2(b, (n - 1) / 2) ** 2)
  end
end

# p exp_2(4, 3)

##############################################

def dup(arr)
  dup_arr = []

  arr.each do |el|
    if el.is_a?(Array)
      dup_arr << dup(el)
    else
      dup_arr << el
    end
  end

  dup_arr
end

# p dup([1, [2], [3, [4]]])
# p dup([1, [2], [3, [4]], [[5, [[6]]]]])

##############################################
# Fibs 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
def fib_ite(n)
  fibs = [0, 1]
  return [] if n == 0
  return [0] if n == 1
  return [0,1] if n == 2

  while fibs.length < n
    fibs << fibs[-2] + fibs[-1]
  end
  fibs
end

# p fib_ite(8)
# p fib_ite(0)
# p fib_ite(1)
# p fib_ite(2)
# p fib_ite(8)

def recurfib(n)
  return [] if n == 0
  return [0] if n == 1
  return [0,1] if n == 2
  fibs = recurfib(n - 1)
  fibs << fibs[-1] + fibs[-2]
  fibs
end

# p recurfib(8)
# p recurfib(0)
# p recurfib(1)
# p recurfib(2)
# p recurfib(8)

##############################################

def bsearch(array, target)
  return nil if array.empty?
  mid = array.length / 2
                          #[0,1,2,3]
  case target <=> array[mid]

  when -1
    bsearch(array.take(mid), target)
  when 0
    return mid
  when 1
    subanswer = bsearch(array.drop(mid+1), target)
    subanswer.nil? ? nil : (mid + 1) + subanswer
    # mid = 3
    # subanswer = 1
    # (3 + 1) + 1 => 6
  end

end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

##############################################

def merge_sort(array)
  return array if array.count < 2
  
  mid = array.length / 2

  left = merge_sort(array.take(mid))
  right = merge_sort(array.drop(mid))

  merge(left, right)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    if left.first < right.first
      merged << left.shift
    else
      merged << right.shift
    end
  end

  merged.concat(left)
  merged.concat(right)
  merged
end

# p merge_sort([])
# p merge_sort([1])
# p merge_sort([5, 3, 7, 1, 4 ])

##############################################

def subsets(array)
  return [array] if array.count == 1
  merged = []
  mid = array.length / 2
  left = subsets(array.take(mid)) #[1]
  right = subsets(array.drop(mid))#[2]
  merged << left.concat(right) 
  merged
end

p subsets([]) # => [[]]
p subsets([1]) # => [[], [1]]
p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
p subsets([1, 2, 3])
# => [[], [1], [2], [1, 2]]
# => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# [a, b]
# => [[], [a], [b], [a, b]]