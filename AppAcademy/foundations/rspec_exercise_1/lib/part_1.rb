def average(num_1, num_2)
  (num_1 + num_2) / 2.0 # case, numbers with decimals
end

def average_array(nums)
  nums.sum / (nums.length * 1.0) # sum of array divided by length with the case of decimal
end

def repeat(string, num)
  string * num
end

def yell(string)
  string.upcase + "!"
end

def alternating_case(sentence)
  words = sentence.split(" ") # string input to array by word
  new_words = words.map.with_index do |word, i| # iterate word array, return new array
    if i % 2 == 0 # if even number, upcase
      word.upcase
    else
      word.downcase # if odd number, downcase
    end
  end
  new_words.join(" ") # join array back to string
end