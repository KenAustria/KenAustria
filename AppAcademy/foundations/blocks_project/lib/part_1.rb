require "byebug"

def select_even_nums(arr)
  # iterate array of numbers
  # use select method to find even numbers
  arr.select { |num| num % 2 == 0 }
  # optimize
  # arr.select {&:even?}
end

def reject_puppies(dogs)
  # iterate hash input
  # use reject method on dogs that are not older than 2 years
  dogs.reject { |dog| dog["age"] <= 2 }
end

def count_positive_subarrays(arr)
  # iterate sub-arrays of array
  # count method will increment a counter when block returns true
  # is the sum of this sub-array greater than 0
  # increment count for array's with positive quantity
  arr.count { |sub_arr| sub_arr.sum > 0}
end

def aba_translate(word)
  vowels = "aeiou" # declare vowel string for reference
  new_word = "" # declare host string

  word.each_char do |char| # iterate string input
    if vowels.include?(char) # if char is a vowel
      new_word += char + "b" + char # add transformation to host string
    else
      new_word += char # else, just add to host string
    end
  end

  new_word
end

def aba_array(arr)
  # iterate array input with map
  # for each element, call aba_translate
  arr.map { |ele| aba_translate(ele) }
end