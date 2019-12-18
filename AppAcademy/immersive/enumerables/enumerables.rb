class Array
  def my_each(&prc)
    count = 0
    while count < self.length
      prc.call(self[count])
      count += 1
    end
    self
  end
  # testing my_each
  # calls my_each twice on the array, printing all the numbers twice.
  # return_value = [1, 2, 3].my_each do |num|
  #   puts num
  # end.my_each do |num|
  #   puts num
  # end

  def my_select(&prc)
    selected = []
    self.my_each {|ele| selected << ele if prc.call(ele)}
    selected
  end
  # testing my_select
  # a = [1, 2, 3]
  # p a.my_select { |num| num > 1 } # => [2, 3]
  # p a.my_select { |num| num == 4 } # => []

  def my_reject(&prc)
    self - self.my_select(&prc)
  end
  # testing my_reject
  #   a = [1, 2, 3]
  #     p a.my_reject { |num| num > 1 } # => [1]
  #     p a.my_reject { |num| num == 4 } # => [1, 2, 3]

  def my_any?(&prc)
    self.count {|ele| prc.call(ele)} >= 1
    # self.my_select(prc) >= 1
  end
  # testing my_any?
  #   a = [1, 2, 3]
  #   p a.my_any? { |num| num > 1 } # => true
  #   p a.my_any? { |num| num == 4 } # => false

  def my_all?(&prc)
    self.count {|ele| prc.call(ele)} == count
    # self.my_select(prc) == self.length
  end
  # testing my_all?
  # a = [1,2,3]
  # p a.my_all? { |num| num > 1 } # => false
  # p a.my_all? { |num| num < 4 } # => true

  def my_flatten
    flattened = []
    self.my_each do |ele|
      if !ele.is_a?(Array)
        flattened << ele
      else
        flattened += ele.my_flatten
      end
    end
    flattened
  end
  # testing my_flatten
  # p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]

  def my_zip(*arr)
    zipped = []
    # self.length.times do |i|
    #   subarr = [self[i]]
    #   arr.my_each do |ele|
    #     subarr << ele[i]
    #   end
    #   zipped << subarr
    # end
    # zipped
    #########################
    self.each_with_index do |ele, idx|
      subarr = []
      subarr << ele
      [*arr].each do |array|
        if idx >= array.length
            subarr << nil
        else
            subarr << array[idx]
        end
      end
      zipped << subarr
    end
      zipped
  end
  # testing my_zip
  #   a = [ 4, 5, 6 ]
  #   b = [ 7, 8, 9 ]
  #   p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  #   p a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
  #   p [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]

  #   c = [10, 11, 12]
  #   d = [13, 14, 15]
  #   p [1, 2].my_zip(a, b, c, d)    # => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]


  def my_rotate(n = 1)
    while n != 0
      if n > 0
        first = self.shift
        self << first
        n -= 1
      else
        self.unshift(self.pop)
        n += 1
      end
    end
    self
  end
  # testing my_rotate
  #   a = [ "a", "b", "c", "d" ]
  #   p a.my_rotate         #=> ["b", "c", "d", "a"]
  #   a = [ "a", "b", "c", "d" ]
  #   p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
  #   a = [ "a", "b", "c", "d" ]
  #   p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
  #   a = [ "a", "b", "c", "d" ]
  #   p a.my_rotate(15)     #=> ["d", "a", "b", "c"]

  def my_join(sep = '')
    new_str = ''
    self.each_with_index do |ele, idx|
      new_str += ele
      new_str += sep unless idx == size - 1 
    end
    new_str
    # self.each {|ele| new_str += ele + sep}
    # new_str[0...-1]
  end
  # testing my_join
  #   a = [ "a", "b", "c", "d" ]
  #   p a.my_join         # => "abcd"
  #   p a.my_join("$")    # => "a$b$c$d"

  def my_reverse
    reversed = []
    count = -1
    while count >= size * -1
      reversed << self[count]
      count -= 1
    end
    reversed
  end
  # testing my_reverse
#   p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
#   p [ 1 ].my_reverse               #=> [1]
end