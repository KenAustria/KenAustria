def palindrome?(string)
  string.each_char.with_index do |char, i|
    # if opposite index pairs don't match
    # first iteration comparison: 0, -1
    # second iteration comparison: 1, -2
    if string[i] != string[-i - 1] # because i = 0
      return false # break and output false
    end
  end

  true # otherwise, output true
end

def substrings(string)
  subs = [] # host array for substrings

  (0...string.length).each do |start_idx| # iterate string with start_idx
    (start_idx...string.length).each do |end_idx| # iterate string from start_idx
      subs << string[start_idx..end_idx] # shovel into host array, characters from start_idx to end_idx
      # 1st iteration: [0..0]
      # 2nd iteration: [0..1] and so on
    end
  end

  subs
end

def palindrome_substrings(str)
  substrings(str).select { |substr| palindrome?(substr) && substr.length > 1 }
  # grab substrings
  # select the substrings that are palindromes and has length greater than 1
end