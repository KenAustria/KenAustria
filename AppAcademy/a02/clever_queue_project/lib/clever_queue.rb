require "simple_queue"

class CleverQueue < SimpleQueue
  attr_accessor :soft_limit
  def initialize(num_1, num_2)
    @capacity = num_1
    @soft_limit = num_2
    raise "invalid args" if @soft_limit > @capacity
    @hidden_array = []
  end

  def capacity
    @capacity
  end

  def enqueue(*args)
    raise "queue is full" if (args.size + @hidden_array.size) >= capacity
    @hidden_array.push(*args)
    @hidden_array.size
  end

  def dequeue(n = 1)
    removed = []
    n.times { removed << @hidden_array.shift}
    removed
  end

  def trim
    return false if @hidden_array.size <= @soft_limit
    if @hidden_array.size > @soft_limit
      @hidden_array.pop until @hidden_array.size <= @soft_limit
      true
    end
  end
end