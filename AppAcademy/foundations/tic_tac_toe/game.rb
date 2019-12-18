 require_relative "board"
 require_relative "human_player"
 require_relative "computer_player"

class Game
  attr_reader :board, :human_player, :computer_player, :current_player

  def initialize(human_player, computer_player)
    @board = Board.new
    @human_player = human_player
    @computer_player = computer_player
    @current_player = human_player #user initiates move
  end

  def switch_players!
    @current_player == @human_player ? @current_player = @computer_player : @current_player = @human_player
  end

  def play_turn
    current_player.display(board)
    move = nil
    while move.nil?
      move = current_player.get_move
      if board.empty?(move)
        board.place_mark(move, current_player.mark)
      else
        puts "Already taken, choose another move."
        move = nil
      end
    end
    switch_players! unless board.game_over?
  end

  def play
    play_turn until board.game_over?
    puts "#{board.winner} win!"
  end
end

if $0 == __FILE__
  puts "Enter player's name"
  user_player = HumanPlayer.new(gets.chomp)
  puts "Enter opponent's name"
  computer_player = ComputerPlayer.new(gets.chomp)
  game = Game.new(user_player, computer_player)
  game.play
end