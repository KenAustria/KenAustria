require 'byebug'
class Array
 # Write a new `Array#merge_sort` method; it should not modify the
 # array it is called on, but create a new sorted array.
  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    arr = self.dup #this was my mistake, not duplicating the array
    return [] if self.empty?
    return arr if size == 1

    mid = length / 2
    left = arr.take(mid).merge_sort(&prc)
    right = arr.drop(mid).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left)
    merged.concat(right)
  end
end

class Array
  # Write a new `Array#pair_sum(target)` method that finds all pairs of
  # positions where the elements at those positions sum to the target.

  # NB: ordering matters. I want each of the pairs to be sorted
  # smaller index before bigger index. I want the array of pairs to be
  # sorted "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def pair_sum(target)
    pairs = []
    (0...self.length).each do |i|
      ((i+1)...self.length).each do |j|
        pairs << [i, j] if self[i] + self[j] == target #silly mistake, comparing == 0
      end
    end
    pairs
  end
end

class Array
  # Write a method that flattens an array to the specified level. If no level
  # is specified, it should entirely flatten nested arrays.

  # Examples:
  # Without an argument:
  # [["a"], "b", ["c", "d", ["e"]]].my_flatten = ["a", "b", "c", "d", "e"]

  # When given 1 as an argument:
  # (Flattens the first level of nested arrays but no deeper)
  # [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) = ["a", "b", "c", "d", ["e"]]

  def my_flatten(level = nil)
    flattened = []
    self.each do |el|
      if el.is_a?(Array) && level != 0
        flattened += (level.nil? ? el.my_flatten : el.my_flatten(level - 1)) #level logic that I did not have before
      else
        flattened << el
      end
    end
    flattened
  end
end

class String
  # Write a `String#symmetric_substrings` method that returns all
  # substrings which are equal to their reverse image ("abba" ==
  # "abba"). We should only include substrings of length > 1.

  def symmetric_substrings
    subs_arr = []
    (0...self.length).each do |i|
      ((i+1)...self.length).each do |j|
        subs_arr << self[i..j] if self[i..j] == self[i..j].reverse
      end
    end
    subs_arr
  end
end

def is_prime?(num)
  return false if num < 2
  (2...num).none? { |factor| num % factor == 0 }
end

# Write a method that returns the nth prime number
def nth_prime(n)
  primes = []
  i = 1
  while primes.length < n
    primes << i if is_prime?(i)
    i += 1
  end
  primes[-1]
end

class Array
  # Write a method that calls a passed block for each element of the array
  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end
    self
  end
end

class Array
  # Write an array method that returns an array made up of the
  # elements in the array that return `true` from the given block
  def my_select(&prc)
    selected = []
    self.each { |el| selected << el if prc.call(el) }
    selected
  end
end

