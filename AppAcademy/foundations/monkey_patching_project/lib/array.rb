require "byebug"
# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.empty? # if array input is empty, return nil

    self.max - self.min # else, return the difference of the max and min
  end

  def average
    return nil if self.empty? # if array input is empty, return nil
    self.sum / (self.length * 1.0) # decimal
  end

  def median
    return nil if self.empty?

    if self.length.odd? # if odd number of elements
      mid_idx = self.length / 2 # returns a number that's rounded down. => 2.5 will be 2
      return self.sort[mid_idx] # use that number as an index
    else
      sorted = self.sort # sort array
      mid_idx = self.length / 2 # find middle point
      first_ele = sorted[mid_idx] # first middle element
      second_ele = sorted[mid_idx - 1] # second middle element
      return (first_ele + second_ele) / 2.0 # return average of two middle elements
    end
  end

  def counts
    count = Hash.new(0) # declare hash initiated at 0, {} will return nil
    self.each { |el| count[el] += 1 } # counting strategy
    count # returh hash
  end

  def my_count(target)
    count = 0
    # iterate array, if current index is equal to element, increment count
    self.each { |ele| count += 1 if ele == target }
    count
  end

  def my_index(target)
    # should accept any value as an argument and return the index where that element is found in the array
    # since we're iterating through beginning of array, it will return smallest index found
    self.each_with_index do |ele, i| # iterate array
      if ele == target # if input matches the current index's value
        return i # return index
      end
    end

    nil # if target input is not found in array
  end

  def my_uniq
    host_arr = []
    self.each { |el| host_arr << el if !(host_arr.include?(el)) }
    host_arr
  end

  def my_transpose
    new_arr = [] # declare host array for 2D array

    # iterating through rows, for every row we're creating an empty new row
    (0...self.length).each do |row| # iterate 2D array, row [0] followed by column [0][1]
      new_row = [] # take elements from iterating and save into new array

      (0...self.length).each do |col| # iterate through columns of that row
        new_row << self[col][row] # shovel every element into new row
      end

      new_arr << new_row # shovel new row into new array
    end

    new_arr # return host array
  end

end

# def my_transpose
#   transpose = Array.new(self.length) { Array.new(self.length) }
#   (self.length).times do |i|
#     (self.length).times {|j| transpose[j][i] = (self[i][j])}
#   end
#   transpose
# end 

# arr_1 = [
#   ["a", "b", "c"],
#   ["d", "e", "f"],
#   ["g", "h", "i"]
# ]
# [a,d,g] new_row
# [[a,d,g]] new_arr << new_row
# [b,e,h] new_row
# [[a,d,g], [b,h,e]] new_arr << new_row
# [c,f,i] new_row
# [[a,d,g], [b,h,e], [c,f,i]] new_arr << new_row