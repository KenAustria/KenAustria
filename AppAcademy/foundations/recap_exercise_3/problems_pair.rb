def no_dupes?(arr)
  non_dupes = []
  count = Hash.new(0)
  arr.each { |ele| count[ele] += 1 }
  count.each { |k, v| non_dupes << k if count[k] == 1 }
  non_dupes
end

# Examples
p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
p no_dupes?([true, true, true])            # => []

############################################################

def no_consecutive_repeats?(arr)
  arr.each_with_index do |el, i|
    if arr[i] == arr[i + 1]
      return false
    end
  end
  true
end

p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
p no_consecutive_repeats?(['x'])                              # => true

############################################################

def char_indices(str)
  str_hash = Hash.new {|h, k| h[k] = []}
  str.each_char.with_index do |char, idx|
    str_hash[char] << idx
  end
  str_hash
end

# Examples
p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

############################################################

def longest_streak(str)
return str if str.length == 1

str_hash = Hash.new(0)
str.each_char do |char|
  str_hash[char] += 1
end

consecutive = str_hash.values.max
i = str_hash.values.length - 1
  while i >= 0
    if str_hash.values[i] == consecutive
      return str_hash.keys[i] * consecutive
    end
    i -= 1
  end
end

p longest_streak('a')           # => 'a'
p longest_streak('accccbbb')    # => 'cccc'
p longest_streak('aaaxyyyyyzz') # => 'yyyyy'
p longest_streak('aaabbb')      # => 'bbb'
p longest_streak('abc')         # => 'c'

############################################################

def bi_prime?(num)
  primes_arr = Prime_nums(num)
  primes_arr.each_with_index do |n1, i1|
    primes_arr.each_with_index do |n2, i2|
      if i1 < i2 && n1 * n2 == num
        return true
      end
    end
  end
  false
end

def bi_prime?(num)
  prime_facts = prime_factors(num) #=> [2, 3]

  if (prime_facts.length == 1) && (prime_facts[0] * prime_facts[0] == num)
    return true
  else
    false
  end

  prime_facts.each_with_index do |n1, i1|
    prime_facts.each_with_index do |n2, i2|
      if i1 < i2 && n1 * n2 == num
        return true
      end
    end
  end
  false
end

def get_factors(num)
  return false if num < 2
  (2...num).select {|n| num % n == 0}
end

def prime_factors(num)
  factors = get_factors(num)
  factors.select do |n|
    prime?(n)
  end
end

def prime?(n)
  return true if n < 2
    (2...n).none? do |i|
    n % i == 0
  end
end

# Examples
p bi_prime?(14)   # => true
p bi_prime?(22)   # => true
p bi_prime?(25)   # => true
p bi_prime?(94)   # => true
p bi_prime?(24)   # => false
p bi_prime?(64)   # => false

############################################################

def vigenere_cipher(message, keys)
  alphabet = ("a".."z").to_a #=> ["a", "b", ...]
  new_str = ""

  message.each_char.with_index do |char, i|
    old_index = alphabet.index(char)
    new_index = (old_index + keys[i % keys.length])
    new_str += alphabet[new_index % 26]
  end
  new_str
end


p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
p vigenere_cipher("yawn", [5, 1])             # => "dbbo"


def vowel_rotate(str)
  new_str = str[0..-1]
  vowels = "aeiou"
  vowel_indices = (0...str.length).select { |i| vowels.include?(str[i]) }
  new_vowel_indices = vowel_indices.rotate(-1)

  vowel_indices.each_with_index do |vowel_idx, i|
    new_vowel = str[new_vowel_indices[i]]
    new_str[vowel_idx] = new_vowel
  end

  new_str
end

# Examples
p vowel_rotate('computer')      # => "cempotur"
p vowel_rotate('oranges')       # => "erongas"
p vowel_rotate('headphones')    # => "heedphanos"
p vowel_rotate('bootcamp')      # => "baotcomp"
p vowel_rotate('awesome')       # => "ewasemo"

############################################################

class String
  def select(&prc)
    return "" if prc.nil?
    host_str = ""
    self.each_char do |char|
      host_str += char if prc.call(char) 
    end
    host_str
  end

  def map!(&prc)
    self.each_char.with_index do |char, i|
      self[i] = prc.call(char, i)
    end
  end
end

# # Examples
# p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
# p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
# p "HELLOworld".select          # => ""

word_1 = "Lovelace"
word_1.map! do |ch| 
  if ch == 'e'
    '3'
  elsif ch == 'a'
    '4'
  else
    ch
  end
end
p word_1    # => "Lov3l4c3"

word_2 = "Dijkstra"
word_2.map! do |ch, i|
  if i.even?
    ch.upcase
  else
    ch.downcase
  end
end
p word_2      # => "DiJkStRa"

############################################################

def multiply(a, b)
  return 0 if b == 0

  if b < 0 # if one of the number args is a neg num
    -(a + multiply(a, (-b) - 1)) # flip the sign
  else
    a + multiply(a, b - 1)
  end
end

# Examples
p multiply(3, 5)        # => 15
p multiply(5, 3)        # => 15
p multiply(2, 4)        # => 8
p multiply(0, 10)       # => 0
p multiply(-3, -6)      # => 18
p multiply(3, -6)       # => -18
p multiply(-3, 6)       # => -18

############################################################

def lucas_sequence(n)
  return [] if n == 0
  return [2] if n == 1
  return [2, 1] if n == 2

  seq = lucas_sequence(n - 1) # array
  next_el = seq[-1] + seq[-2]
  seq << next_el
  seq
end

# Examples
p lucas_sequence(0)   # => []
p lucas_sequence(1)   # => [2]
p lucas_sequence(2)   # => [2, 1]
p lucas_sequence(3)   # => [2, 1, 3]
p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]

############################################################

def prime_factorization(num)
  (2...num).each do |fact|
    if num % fact == 0
      other_fact = num / fact
      return [ *prime_factorization(fact), *prime_factorization(other_fact) ]
    end
  end
end

# Examples
p prime_factorization(12)     # => [2, 2, 3]
p prime_factorization(24)     # => [2, 2, 2, 3]
p prime_factorization(25)     # => [5, 5]
p prime_factorization(60)     # => [2, 2, 3, 5]
p prime_factorization(7)      # => [7]
p prime_factorization(11)     # => [11]
p prime_factorization(2017)   # => [2017]