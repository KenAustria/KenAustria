require_relative "code"

class Mastermind
  def initialize(length)
    @secret_code = Code.random(length)
  end

  def print_matches(guess_code)
    # string interpolation
    #print the number of exact matches between `@secret_code` and the arg
    puts "exact matches: #{@secret_code.num_exact_matches(guess_code)}" # exact matches: 2
    puts "near matches: #{@secret_code.num_near_matches(guess_code)}" # near matches: 1
  end
  
  def ask_user_for_guess
    puts "Enter a code"
    guess_code = Code.from_string(gets.chomp) # save user's input into reference
    self.print_matches(guess_code) # print exact and near matches
    @secret_code == guess_code # boolean
  end

end
