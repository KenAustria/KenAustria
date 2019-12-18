def element_count(arr)
  # declare hash with values set to 0
  count = Hash.new(0)
  # for each element in array
  # increment count of element in hash as it appears
  arr.each { |key| count[key] += 1 }
  count
end

def char_replace!(str, hash)
  str.each_char.with_index do |char, i|
    if hash.has_key?(char) # can also use .key? or .include?
      str[i] = hash[char]
    end
  end
  str
end

def product_inject(arr)
  arr.inject { |acc, el| acc * el }
end