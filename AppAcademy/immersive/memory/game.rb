require_relative "board.rb"
require_relative "player.rb"

class Game
  # remove from production
  attr_reader :board, :scores
  # no seriously

  def initialize(difficulty, *args)
    @turn_over = false
    @previous_card = nil
    @temp_pos = []
    @locked_pos = []
    @settings = [4, 4, 0]
    @board_size = @settings[0]
    @settings = set_difficulty(difficulty) unless difficulty == "1"
    @difficulty = difficulty
    puts declare_difficulty(difficulty)
    @board = Board.new(@settings)
    @scores = Hash.new(0)
    display_bombs(difficulty, @board)

    args = ["player_one", "player_two_ai"] if args == []
    @players = args.map do |name| 
        type = "human"
        type = "ai" if name.split('').drop(name.length-2) == "ai"
        Player.new(name, type)
    end
    @current_player = @players[0]
  end

  def turn_over?
    @turn_over
  end

  def set_difficulty(difficulty)
    difficulties = {
      "2" => [4, 5, 2],
      "3" => [5, 6, 5],
      "4" => [6, 8, 8]
    }
    [
        difficulties[difficulty][0],
        difficulties[difficulty][1],
        difficulties[difficulty][2]
    ]
  end

  def declare_difficulty(difficulty)
    "The difficulty is set to #{difficulty} of 4"
  end

  def display_bombs(difficulty, board)
    board if difficulty == "1"
    display_time = {
      "1" => 0,
      "2" => 2,
      "3" => 3,
      "4" => 4
    }
    board.grid.each do |row|
        row.each do |card|
            card.face_up = true if card.is_bomb?
        end
    end
    display_seconds = display_time[difficulty]
    puts "Displaying bombs for #{display_seconds} seconds"
    board.display_board
    sleep(display_seconds)
    system("clear")

    board.grid.each do |row|
        row.each do |card|
            card.face_up = false if card.is_bomb?
        end
    end
  end

  def take_turn
    2.times do |turn|
        take_guess(turn + 1) unless turn_over?
    end
    @current_player = @players[(@players.index(@current_player) + 1) % @players.length]
    @turn_over = false
    @previous_card = nil
  end

  def get_guess
    guess = @current_player.guess(@board_size, @board.grid)
    guess[0] -= 1
    guess[1] -= 1
    unless guess[0] > (@board_size - 1) || guess[1] > (@board_size - 1)
        unless @temp_pos.include?(guess) || @locked_pos.include?(guess)
            return guess
        else
            puts "hey, you've already made that guess"
        end
    else
        puts "hey, one or both of those numbers are too big"
    end
    false
  end

  def take_guess(turn)
    guess = false
    until guess
        guess = get_guess
    end
    @temp_pos << guess
    card = @board.grid[guess[0]][guess[1]]
    card.face_up = true
    @previous_card = card if turn == 1
    if card.is_bomb?
        @turn_over = true
        @scores[@current_player.name] -= 3
        puts "oh no you flipped a bomb and lost 3 points! You have #{@scores[@current_player.name]} points! next player's turn."
    end
    @board.display_board
    if turn == 2
        if card.value == @previous_card.value
            @temp_pos.each do |pos|
              @locked_pos << pos
            end
            @previous_card.paired = true
            card.paired = true
            puts "Good job, you earned 1 point! You have #{@scores[@current_player.name]} points!"
            @scores[@current_player.name] += 1 # if players of same name, we're screwed
        end
        reset_board(card)
    end
  end

  def reset_board(card)
    sleep_time = 0
    unless card.paired && @previous_card.paired
        card.face_up = false
        @previous_card.face_up = false
        sleep_time = 3
    end
    @board.clear(sleep_time)
    @board.display_board
    @temp_pos = []
  end

  def board_complete?
    @board.grid.flatten.select { |i| !i.is_bomb? }.all? { |i| i.face_up? }
  end
end

if __FILE__ == $0
  difficulty = ARGV[0]
  difficulty = "1" if difficulty.nil? || !["1", "2", "3", "4"].include?(difficulty)
  game = Game.new(difficulty)

  until game.board_complete?
    #game.board.grid.each { |row| p row.map { |i| i.value } }
    game.take_turn
  end

  puts "game over!"
  game.scores.keys.each do |player_name|
    puts "#{player_name} scored #{game.scores[player_name]} points"
  end

end
