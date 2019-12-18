class Array
  def my_each
    self.length.times { |el| prc.call(self[el])}
    self
  end

  def my_select(&prc)
    [].tap do |selected| #manipulate [] and return after the block
      self.each { |el| selected << el if prc.call(el) }
    end
  end

  def my_reject(&prc)
    [].tap do |rejected|
      self.each { |el| rejected << el if !prc.call(el) }
    end
  end

  def my_any?(&prc)
    self.any? { |el| prc.call(el) } 
  end

  def my_all?(&prc)
    self.all? { |el| prc.call(el) }
  end

  def my_flatten
    return [self] if !self.is_a?(Array)
    [].tap do |flattened|
      self.each { |el| flattened += my_flatten(el) }
    end
  end

  def my_zip(*args)
    main_arr = []
    self.length.times do |idx|
      sub_arr = [self[idx]]

      args.my_each do |el|
        sub_arr << el[idx]
      end
      main_arr << sub_arr
    end
    main_arr
  end

  def my_rotate(rotation = 1)
    rotation = rotation % self.length
    self[rotation..-1] + self[0...rotation]
  end

  def my_join(separator = "")
    host_str = ""
    self.my_each do |el|
      host_str += el # char first in the string
      host_str += separator unless self.last == el
    end
    host_str
  end

  def my_reverse
    host_arr = []
    self.my_each { |char| host_arr.unshift(char) }
  end
end