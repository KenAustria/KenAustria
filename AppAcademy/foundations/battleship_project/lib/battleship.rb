require_relative "board"
require_relative "player"

class Battleship
  attr_reader :board, :player

  def initialize(n)
    @player = Player.new
    @board = Board.new(n)
    @remaining_misses = @board.size / 2
  end

  def start_game
    @board.place_random_ships
    puts @board.num_ships
    @board.print
  end

  def lose?
    if @remaining_misses <= 0
      puts 'you lose'
      return true
    else
      return false
    end
  end

  def win?
    @board.num_ships
    if @board.num_ships <= 0
      puts 'you win'
      return true
    else
      return false
    end
  end

  def game_over?
    self.win? || self.lose? ? true : false
  end

  def turn
    position = @player.get_move
    if @board.attack(position) == false
      @remaining_misses -= 1
    end
    @board.print #an instance method so no need for 'puts @board.print'
    puts @remaining_misses #a variable so need 'puts @remaining_misses'
  end
end
