require_relative "board"
require_relative "human_player"

class Game
  attr_reader :player

  def initialize(player, size = 4)
    @board = Board.new(size)
    @previous_guess = nil
    @player = player
  end

  def compare_guess(new_guess) #compare the Card at guessed_pos with the one at previous_guess
    if previous_guess #if true, check this condition
      if match?(previous_guess, new_guess) #if both positions of the user input is a match
        player.receive_match(previous_guess, new_guess) #confirm player has received match
      else
        puts "Try again." #alert user there wasn't a match
        [previous_guess, new_guess].each { |pos| board.hide(pos) } #attempted pairs get faced down, hidden
      end
      self.previous_guess = nil # ??? set value back to nil for next attempted guess
      player.previous_guess = nil # ??? why is there a previous_guess for both Game and Human_Player
    else
      self.previous_guess = new_guess # ???
      player.previous_guess = new_guess # ???
    end
  end

  def get_player_input
    pos = nil

    until pos && valid_pos?(pos)
      pos = player.get_input
    end

    pos
  end

  def make_guess(pos)
    revealed_value = board.reveal(pos) #reveal the card with given position
    player.receive_revealed_card(pos, revealed_value) #confirm player received card
    board.render #render current state of board

    compare_guess(pos) #compare the Card at guessed_pos with the one at previous_guess

    sleep(1) #pause the program for n seconds
    board.render #render current state of board
  end

  def play
    until Board.won? #if the game isn't over
      Board.render # render the board
      pos = get_player_input #save player's input position
      make_guess(pos) #attempt turn with current input position
    end

    puts "You've won!" #game is over, player has won
  end

  def valid_pos?(pos)
    pos.is_a?(Array) && #is an array
      pos.count == 2 && #has row and col index
      pos.all? { |x| x.between?(0, board.size - 1) } #within the range of the board
  end
end