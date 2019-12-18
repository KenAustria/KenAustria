require "byebug"
# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(str)
  compressed = "" # declare host string
  i = 0
  while i < str.length
    char = str[i] # first char of potential streak of chars
    count = 0 # set up declare count
    while char == str[i] # adjacent elements, iterate inner loop while on the streak
      count += 1 # increment when consecutive characters found
      i += 1
    end
    if count > 1 # prevent 1 count, example "1c"
      compressed += (count.to_s + char) # concantenate "2c"
    else
      compressed += char # "c"
    end
  end
  compressed
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
