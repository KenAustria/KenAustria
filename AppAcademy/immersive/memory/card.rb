class Card
  attr_reader :value

  def initialize(value, is_bomb = false)
    @value = value
    @is_bomb = is_bomb
    @face_up = false
    @paired = false
  end

  def is_bomb?
    @is_bomb
  end

  def face_up?
    @face_up
  end

  def is_paired?
    @paired
  end

  def pair_found
    @paired = true
  end

  def flip
    @face_up = {true => false, false => true}[@face_up]
  end

  def matches?(card_instance)
    if @value == card_instance.value
  end
end