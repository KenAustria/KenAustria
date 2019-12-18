class SimpleQueue
  def initialize
    @hidden_array = []
  end

  def size
    @hidden_array.length
  end

  def vacant?
    @hidden_array.empty?
  end

  def front
    @hidden_array[0]
  end

  def back
    @hidden_array[-1]
  end

  def first(n)
    @hidden_array.take(n)
  end

  def last(n)
    @hidden_array.drop(n)
  end

  def enqueue(n)
    @hidden_array.push(n)
    size
  end

  def dequeue
    return nil if vacant?
    removed = @hidden_array.shift
    removed
  end
end