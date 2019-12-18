# ### Factors
#
# Write a method `factors(num)` that returns an array containing all the
# factors of a given number.

def factors(num)
  facs = []
  (1..num).each do |ele|
    facs << ele if num % ele == 0
  end
  facs
end
# testing factors
# p factors(-1) # => []
# p factors(0) # => []
# p factors(7) # => [1, 7]
# p factors(24) # => [1, 2, 3, 4, 6, 8, 12, 24]


# ### Bubble Sort
#
# http://en.wikipedia.org/wiki/bubble_sort
#
# Implement Bubble sort in a method, `Array#bubble_sort!`. Your method should
# modify the array so that it is in sorted order.
#
# > Bubble sort, sometimes incorrectly referred to as sinking sort, is a
# > simple sorting algorithm that works by repeatedly stepping through
# > the list to be sorted, comparing each pair of adjacent items and
# > swapping them if they are in the wrong order. The pass through the
# > list is repeated until no swaps are needed, which indicates that the
# > list is sorted. The algorithm gets its name from the way smaller
# > elements "bubble" to the top of the list. Because it only uses
# > comparisons to operate on elements, it is a comparison
# > sort. Although the algorithm is simple, most other algorithms are
# > more efficient for sorting large lists.
#
# Hint: Ruby has parallel assignment for easily swapping values:
# http://rubyquicktips.com/post/384502538/easily-swap-two-variables-values
#
# After writing `bubble_sort!`, write a `bubble_sort` that does the same
# but doesn't modify the original. Do this in two lines using `dup`.
#
# Finally, modify your `Array#bubble_sort!` method so that, instead of
# using `>` and `<` to compare elements, it takes a block to perform the
# comparison:
#
# ```ruby
# [1, 3, 5].bubble_sort! { |num1, num2| num1 <=> num2 } #sort ascending
# [1, 3, 5].bubble_sort! { |num1, num2| num2 <=> num1 } #sort descending
# ```
#
# #### `#<=>` (the **spaceship** method) compares objects. `x.<=>(y)` returns
# `-1` if `x` is less than `y`. If `x` and `y` are equal, it returns `0`. If
# greater, `1`. For future reference, you can define `<=>` on your own classes.
#
# http://stackoverflow.com/questions/827649/what-is-the-ruby-spaceship-operator

class Array
  def bubble_sort!(&prc)
    prc ||= Proc.new {|a, b| a <=> b}
    sorted = false

    while !sorted
      sorted = true
      self.each_with_index do |ele, idx|
        break if idx == size - 1
        if prc.call(ele, self[idx+1]) == 1
          self[idx], self[idx+1] = self[idx+1], self[idx]
          sorted = false
        end
      end
    end

    self
  end

  def bubble_sort(&prc)
    arr = self.dup
    arr.bubble_sort!
    #(self.dup).bubble_sort!
  end
end
# testing bubble sort
# p [2, 8, 5, 2, 6].bubble_sort      # => [2, 2, 5, 6, 8]
# p [10, 8, 7, 1, 2, 3].bubble_sort  # => [1, 2, 3, 7, 8, 10]

# ### Substrings and Subwords
#
# Write a method, `substrings`, that will take a `String` and return an
# array containing each of its substrings. Don't repeat substrings.
# Example output: `substrings("cat") => ["c", "ca", "cat", "a", "at",
# "t"]`.
#
# Your `substrings` method returns many strings that are not true English
# words. Let's write a new method, `subwords`, which will call
# `substrings`, filtering it to return only valid words. To do this,
# `subwords` will accept both a string and a dictionary (an array of
# words).

def substrings(string)
    subs = []
    string.each_char.with_index do |char, idx|
        ((idx+1)..string.length).each do |idx2|
            subword = string[idx...idx2]
            subs << subword if !subs.include?(subword)
        end
    end
    subs
end
# testing substrings
# p substrings("cat") # => ["c", "ca", "cat", "a", "at","t"]
# p substrings("baba") # => ["b", "ba", "bab", "baba", "a", "ab", "aba"]

def subwords(word, dictionary)
    substrings(word).select {|word| dictionary.include?(word)}
end
# testing subwords
# dictionary = ['fir', 'fire', 'ire', 'truck', 'asdfadsf', 'lkjlkj']
# p subwords('firetruck', dictionary) # => ['fir', 'fire', 'ire', 'truck']

# ### Doubler
# Write a `doubler` method that takes an array of integers and returns an
# array with the original elements multiplied by two.

def doubler(array)
    array.map {|ele| ele*2}
end
# testing doubler
# p doubler([0]) # => [0]
# p doubler([1,2,3]) # => [2,4,6]
# p doubler(['aaa']) # => ['aaaaaa']
# p doubler(['a','b','c']) # => ['aa','bb','cc]
# p doubler([true]) # => Undefined Method Error

# ### My Each
# Extend the Array class to include a method named `my_each` that takes a
# block, calls the block on every element of the array, and then returns
# the original array. Do not use Enumerable's `each` method. I want to be
# able to write:
#
# ```ruby
# # calls my_each twice on the array, printing all the numbers twice.
# return_value = [1, 2, 3].my_each do |num|
#   puts num
# end.my_each do |num|
#   puts num
# end
# # => 1
#      2
#      3
#      1
#      2
#      3
#
# p return_value # => [1, 2, 3]
# ```

class Array
  def my_each(&prc)
    count = 0
    while count < self.length
      prc.call(self[count])
      count += 1
    end
    self
  end
end
  # testing my_each
  # calls my_each twice on the array, printing all the numbers twice.
  # return_value = [1, 2, 3].my_each do |num|
  #   puts num
  # end.my_each do |num|
  #   puts num
  # end

# ### My Enumerable Methods
# * Implement new `Array` methods `my_map` and `my_select`. Do
#   it by monkey-patching the `Array` class. Don't use any of the
#   original versions when writing these. Use your `my_each` method to
#   define the others. Remember that `each`/`map`/`select` do not modify
#   the original array.
# * Implement a `my_inject` method. Your version shouldn't take an
#   optional starting argument; just use the first element. Ruby's
#   `inject` is fancy (you can write `[1, 2, 3].inject(:+)` to shorten
#   up `[1, 2, 3].inject { |sum, num| sum + num }`), but do the block
#   (and not the symbol) version. Again, use your `my_each` to define
#   `my_inject`. Again, do not modify the original array.

class Array
  def my_map(&prc)
    arr = []
    self.my_each {|ele| arr << prc.call(ele)}
    arr
  end
  # testing my_map
#   a = [1,2,3]
#   alpha = ("a".."z").to_a
#   p a.my_map {|num| num*2} # => [2,4,6]
#   p a.my_map {|num| num.to_s + 'a'} # => ['1a','2a','3a']
#   p a.my_map {|num| alpha[num]} # => ['b','c','d']

  def my_select(&prc)
    selected = []
    self.my_each {|ele| selected << ele if prc.call(ele)}
    selected
  end
  # testing my_select
  # a = [1, 2, 3]
  # p a.my_select { |num| num > 1 } # => [2, 3]
  # p a.my_select { |num| num == 4 } # => []

  def my_inject(&blk)
    sum = self[0]
    self[1..-1].each {|ele| sum = blk.call(sum, ele)}
    sum
  end
  # testing my_inject
  # p [11,7,2,4].my_inject { |sum, num| sum + num } # => 24
  # p [11,7,2,4].my_inject { |sum, num| sum * num } # => 616
end

# ### Concatenate
# Create a method that takes in an `Array` of `String`s and uses `inject`
# to return the concatenation of the strings.
#
# ```ruby
# concatenate(["Yay ", "for ", "strings!"])
# # => "Yay for strings!"
# ```

def concatenate(strings)
  strings.my_inject {|str, space| str + space}
end
# testing concatenate
p concatenate(["Yay ", "for ", "strings!"]) # => "Yay for strings!"