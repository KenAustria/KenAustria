require "byebug"

class Code
  attr_reader :pegs
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs?(chars)
    chars.all? { |char| POSSIBLE_PEGS.has_key?(char.upcase) }
  end

  def initialize(chars)
    if Code.valid_pegs?(chars) #should call Code::valid_pegs?
      @pegs = chars.map(&:upcase) # reference to an array of chars
    else
      raise "error"
    end
  end

  def self.random(length)
    random_pegs = [] # host array for random pegs
    length.times { random_pegs << POSSIBLE_PEGS.keys.sample } # generate random keys from hash as many times as length input
    Code.new(random_pegs) # return code instance
  end

  def self.from_string(string)
    Code.new(string.split("")) # string to array of chars, return new code instance
  end

  def [](index)
    @pegs[index] # return element input at given index
  end

  def length
    @pegs.length
  end

  def num_exact_matches(guess_code)
    count = 0
    (0...guess_code.length).each do |i|
      count += 1 if guess_code[i] == @pegs[i] #how does @pegs[i] iterating
    end
    count
  end

  def num_near_matches(guess_code)
    count = 0
    (0...guess_code.length).each do |i|
      count += 1 if guess_code[i] != @pegs[i] && @pegs.has_key?(guess_code[i])
    end
    count
  end

  def ==(other_code)
    # @pegs == other_code.pegs
    return self.pegs == other_code.pegs
  end
end
