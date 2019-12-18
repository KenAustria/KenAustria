class Player
  attr_reader :name

  def initialize(name)
    @name = name
    @score = 0

    @board_state = {}
  end
  
  def increase_score(value)
    @score += value
  end

  def decrease_score(value)
    @score -= value
  end

  def get_guess
    print "Hey #{@name}, input your guess: "
    user_input = STDIN.gets.chomp
    user_input.split(",").map(&:to_i)
  end

  def valid_guess?(guess)
    valid_guess = true
    valid_guess = false if guess.length != 2
    valid_guess = false if guess[0] == 0 || guess[1] == 0
    valid_guess
  end

  def prompt_guess
    until valid_guess?(get_guess)
      puts "invalid guess, please try again!"
    end
  end

  def print(board)
    puts "  " + (1..board.length).to_a.join(" ")
    board.each_with_index do |row, idx|
      puts "#{idx + 1} " + row.map { |i| i.face_up? ? i.value : "?" }.join(" ")
    end
  end
end