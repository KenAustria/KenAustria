def proper_factors(num)
  (1...num).select { |n| num % n == 0 }
end

def aliquot_sum(num)
  proper_factors(num).sum
end

def perfect_number?(num)
  aliquot_sum(num) == num
end

def ideal_numbers(n)
  perfect_nums = []

  i = 1
  while perfect_nums.length < n
    perfect_nums << i if perfect_number?(i)
    i += 1
  end

  perfect_nums
end
