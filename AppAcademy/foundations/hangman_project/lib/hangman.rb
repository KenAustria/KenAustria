class Hangman
  attr_reader :guess_word, :attempted_chars, :remaining_incorrect_guesses
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  def self.random_word
    DICTIONARY.sample
  end

  def initialize
    @secret_word = Hangman.random_word
    @guess_word = Array.new(@secret_word.length, "_")
    @attempted_chars = []
    @remaining_incorrect_guesses = 5
  end

  def already_attempted?(char)
    # if char input is included in attempted_chars array, return true, else false
    @attempted_chars.include?(char) ? true : false
  end

  def get_matching_indices(char)
    matching_indices = [] # host array for matching indices

    # iterate through secret word string with their index
    @secret_word.each_char.with_index do |secret_char, i|
      if secret_char == char # if char input matches current element
        matching_indices << i # insert index into matching_indices array
      end
    end

    matching_indices # return array
  end

  def fill_indices(char, arr)
    arr.each do |index| # iterate through array input
      @guess_word[index] = char # assign char to index of @guess_word
    end
  end

  def try_guess(char)
    if self.already_attempted?(char) #if char input is included in already_attempted array
      puts "that has already been attempted"
      return false
    end

    matches = self.get_matching_indices(char) #array of matching indices of char with secret word
    if matches.empty?
      @remaining_incorrect_guesses -= 1 #decrement if no matches
    end
    self.fill_indices(char, matches) #take array of indices and fill the char of the index

    @attempted_chars << char #if char is not yet inclued in already_attempted array
    true #return true to indicate the guess was not previously attempted
  end

  def ask_user_for_guess
    puts "Enter a char:"
    user_char = gets.chomp
    self.try_guess(user_char)
  end

  def win?
    if @guess_word.join("") == @secret_word
      puts "WIN"
      return true
    else
      return false
    end
  end

  def lose?
    if @remaining_incorrect_guesses == 0
      puts "LOSE"
      return true
    else
      return false
    end
  end

  def game_over?
    if self.win? || self.lose?
      puts @secret_word
      return true
    else
      return false
    end
  end
end
