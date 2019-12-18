require 'byebug'
class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil, &prc)
    arr = self
    if accumulator.nil?
      accumulator = self.first
      arr = self.drop(1)
    end

    arr.each do |el|
      accumulator = prc.call(accumulator, el)
    end

    accumulator
  end
end

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def is_prime?(num)
  return false if num < 2
  (2...num).none? { |factor| num % factor == 0 }
end

def primes(num)
  primes = []

  i = 1
  while primes.length < num
    primes << i if is_prime?(i)
    i += 1
  end

  primes
end

# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1] if num == 1
  facs = factorials_rec(num - 1)
  facs << facs.last * (num - 1)
  facs
end

class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    dups_hash = Hash.new { |h, k| h[k] = [] }
    self.each_with_index do |el, i|
      dups_hash[el] << i
    end
    dups_hash.select { |k, v| v.count > 1 }
  end
end

class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  # def symmetric_substrings
  #   subs = []
  #   (0...self.length).each do |i|
  #     ((i+1)...self.length).each do |j|
  #       subs << self[i..j] if subs[i..j] == subs[i..j].reverse
  #     end
  #   end
  #   subs
  # end
  def symmetric_substrings
    subs = []
    (0...self.length).each do |i|
      (0...self.length).each do |j|
        subs << self[i..j] if self[i..j].length > 1 && self[i..j] == self[i..j].reverse
      end
    end
    subs
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    return [] if self.empty?
    return self if length == 1

    mid = length / 2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)

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
