class Player

  attr_reader :name
  attr_accessor :letters

  def initialize
    p 'Please enter your name: '
    @name = gets.chomp
    @letters = ''
  end

  def guess(fragment)
    p @name + ': Which letter would you like to try next?'
    input = gets.chomp.downcase
    exit! if input == 'quit'
    fragment + input
  end
end