def partition(arr, num)
  new_arr = [[], []] # host 2D array
  arr.each do |el| # iterate array
    # if el is less than, shovel into first sub-array
    # if el is greater than or equal to, shovel into second sub-array
    el < num ? new_arr[0] << el : new_arr[1] << el
  end
  new_arr
end

def merge(hash_1, hash_2)
  merge_hash = {} # declare host hash

  # iterate through hash argument, # insert hash argument's key and value
  hash_1.each { |k,v| merge_hash[k] = v }

  # since we're iterating hash_2 after hash_1, only then will we overwrite
  # overwrite preexisting keys from hash_1
  hash_2.each { |k, v| merge_hash[k] = v }

  merge_hash
end

def censor(sen, arr)
  vowel = "aeiou" # declare vowel reference
  words = sen.split(" ") # split sentence string argument to array of words

  # iterate words
  new_words = words.map do |word|
    # if current word is included in array argument
    # we pass a downcase version of the word argument
    # but not actually mutating the word argument to be downcased
    if arr.include?(word.downcase)
      word.each_char do |char| # iterate word
        # if current char is a vowel, replace with "*"
        # since we didn't actually mutate the word argument to be downcased
        # we need to pass a downcased version of each character
        if vowel.include?(char.downcase)
          word[char] = "*"
        end
      end
    else
      word
    end
  end

  # join arr to string and return
  new_words.join(" ")
end

def censor(sentence, curse_words)
  words = sentence.split(" ") # array of original words in sentence input

  new_words = words.map do |word| # iterate array of words
    if curse_words.include?(word.downcase) # case for upcase char, if current char is a curse word
      star_vowels(word) # remove vowels from that word
    else
      word
    end
  end

  new_words.join(" ") # join array into string of words
end

def star_vowels(string)
  vowels = "aeiou" # declare vowels string
  new_str = "" # declare host string

  string.each_char do |char| # iterate through string by character
    if vowels.include?(char.downcase) # case for upcase char, if current char is a vowel
      new_str += "*" # replace vowel with *, then add to host string
    else
      new_str += char # add char to host string
    end
  end

  new_str
end

def power_of_two?(num)
  # keep multiplying by 2
  # 2*1=2, 2*2=4, 2*4=8, and so on
  product = 1

  while product < num # iterate until product is equal to or greater than num input
    product *= 2
  end

  product == num # if greater than, return false, if equal return true
end
