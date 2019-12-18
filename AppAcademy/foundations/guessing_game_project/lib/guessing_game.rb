class GuessingGame
  attr_reader :num_attempts
  def initialize(min, max)
    @secret_num = rand(min..max)
    @num_attempts = 0
    @game_over = false
  end

  def game_over?
    @game_over
  end

  def check_num(num)
    @num_attempts += 1

    if num == @secret_num
      puts "you win"
      @game_over = true
    elsif num > @secret_num
      puts "too big"
    else num < @secret_num
      puts "too small"
    end
  end

  def ask_user
    puts "enter a number"
    user_input = gets.chomp
    self.check_num(user_input.to_i)
  end
end
