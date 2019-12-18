def hipsterfy(word) # "burger"
  vowels = "aeiou" # declare vowel reference

  i = word.length - 1 # last element
  while i >= 0 # iterate from last index
    if vowels.include?(word[i]) # if current char is a vowel
      # [burg] + [r]
      return word[0...i] + word[i+1..-1] # splice from current char
    end

    i -= 1 # decrement
  end

  word # return if no vowels
end

def vowel_counts(string)
  counts = Hash.new(0) # declare hash with values at 0
  vowels = "aeiou" # declare vowel string

  string.each_char do |char| # iterate through each character of string
    if vowels.include?(char.downcase) # check if a downcase version of the char exist, for the case the string input includes upcase char
      counts[char.downcase] += 1 # now actually add a downcase version of the vowel, then increment that lowercase vowel's count
    end
  end

  counts # return hash
end

def caesar_cipher(message, n)
  alphabet = ("a".."z").to_a # generate alphabet array
  new_message = "" # declare host string

  message.each_char do |char| # iterate string input
    if alphabet.include?(char) # if the char is an alphabetic letter
      # old_index = alphabet.index(char) # find index of char within alphabet array
      # new_index = old_index + n # new_index is a number added with number input
      new_message += alphabet[(alphabet.index(char) + n) % 26] # turn into character, modulus for the case of "z"
    else
      new_message += char # use original character, do not modify non-alphabetic characters
    end
  end

  new_message # return shifted message
end

# case for 'z', n = 1
# index of 'z' in alphabet = 25
# 25 + 1 = 26
# 26 % 26 = 0, which gives 'a'