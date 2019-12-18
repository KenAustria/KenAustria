class Room
  attr_reader :capacity, :occupants
  def initialize(capacity)
    @capacity = capacity
    @occupants = []
  end

  def full?
    @occupants.length >= @capacity ? true : false
  end

  def available_space
    return @capacity - @occupants.length # current occupants subtracted from capacity
  end

  def add_occupant(occupant)
    if !self.full? # if capacity is not reached
      @occupants << occupant # add occupant
      return true # confirm
    else
      return false
    end
  end
end
