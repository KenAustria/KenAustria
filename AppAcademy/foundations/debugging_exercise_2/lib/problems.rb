# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

def prime?(num)
  return false if num < 2
  (2...num).none? { |i| num % i == 0}
end

def largest_prime_factor(num)
  num.downto(2).each do |factor|
    return factor if num % factor == 0 && prime?(factor)
  end
end

def unique_chars?(str)
  new_hash = Hash.new { |h, k| h[k] = [] }
  str.each_char.each_with_index { |char, i| new_hash[char] << i }
  new_hash.none? { |k, v| v.count > 1 }
end
def unique_chars?(str)
  new_hash = Hash.new(0)
  str.each_char  { |ch| new_hash[ch] += 1 }
  new_hash.all? { |k, v| v == 1 }
end


def dupe_indices(array)
  indices = Hash.new { |hash, key| hash[key] = []} # every hash key's value is an empty unique array

  array.each_with_index do |ele, i| # iterate elements of array with index
    indices[ele] << i # add incides to arrays
  end

  indices.select { |ele, arr| arr.length > 1 } # select elements repeated in array
end

def ele_count(arr)
  count = Hash.new(0) # declare host hash
  arr.each { |ele| count[ele] += 1} # iterate array, increment individual count
  count
end

def ana_array(arr_1, arr_2)
  count_1 = ele_count(arr_1)
  count_2 = ele_count(arr_2)
  count_1 == count_2
end
