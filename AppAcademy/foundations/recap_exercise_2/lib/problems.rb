# Write a method, least_common_multiple, that takes in two numbers and returns the smallest number that is a mutiple 
# of both of the given numbers
def least_common_multiple(num_1, num_2)
  i = num_1
  while true
    return i if i % num_1 == 0 && i % num_2 == 0
    i += 1
  end
end


# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.
def most_frequent_bigram(str)
  counter = Hash.new(0)

  (0...str.length - 1).each do |i|
    bigram = str[i] + str[i + 1]
    counter[bigram] += 1
  end

  counter.sort_by { |k, v| v }.last.first

  # [[k, v], [k, v], [k, v]]

  # largest_count = 0
  # counter.each do |k, v|
  #   if counter[k] > largest_count
  #     largest_count = counter[k]
  #   end
  # end
  
  # counter.key(largest_count)
end


class Hash
    # Write a method, Hash#inverse, that returns a new hash where the key-value pairs are swapped
    def inverse
      new_hash = {}
      self.each { |k, v| new_hash[v] = k } 
      new_hash
    end
end


class Array
    # Write a method, Array#pair_sum_count, that takes in a target number returns the number of pairs of elements that sum to the given target
    def pair_sum_count(num)
      count = 0  

      self.each_with_index do |el1, i1|
        self.each_with_index do |el2, i2|
            count += 1 if el1 + el2 == num && i2 > i1
        end
      end

      count
    end


    # Write a method, Array#bubble_sort, that takes in an optional proc argument.
    # When given a proc, the method should sort the array according to the proc.
    # When no proc is given, the method should sort the array in increasing order.
    def bubble_sort(&prc)
      prc ||= Proc.new { |a, b| a <=> b }
      sorted = false
      while !sorted
        sorted = true
        (0...self.length - 1).each do |i|
          if prc.call(self[i], self[i + 1]) == 1
            self[i], self[i + 1] = self[i + 1], self[i]
            sorted = false
          end
        end
      end
      self
    end
end
