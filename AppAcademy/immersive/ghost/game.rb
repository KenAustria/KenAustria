require "./player.rb"

class Game

  attr_reader :players, :dictionary, :num_players
  attr_accessor :fragment, :current_player

  GHOST = 'GHOST'

  def initialize(num_players)
    @num_players = num_players
    @players = []
    @num_players.times {@players << Player.new}
    @current_player = @players[0]
    @fragment = ""
    @dictionary = Hash.new {|h,k| h[k] = []}
    File.open("dictionary.txt").each{|word| dictionary[word[0]] << word.chomp}
  end

  def take_turn
    @fragment = @current_player.guess(@fragment)
    p 'Current fragment: ' + @fragment
    puts
    if round_over?
      p 'Sorry ' + @current_player.name + ', you lost the round'
    else
      switch_player
    end
  end

  def round_over?
    return true if dictionary[@fragment[0]].include?(@fragment)
    dictionary[@fragment[0]].none? {|word| word[0...(@fragment.length)] == @fragment} if @fragment.length > 1
  end

  def switch_player
    current_idx = @players.index(@current_player)
    if current_idx == @players.length - 1
      @current_player = @players[0]
    else
      @current_player = @players[current_idx + 1]
    end
  end

  def play_round
    take_turn until round_over?
    @fragment = ''
    @current_player.letters += GHOST[@current_player.letters.length]
    if @current_player.letters.length == 5
      p 'Sorry ' + @current_player.name + ', you lost the game'
      @players.delete(@current_player) 
      @current_player = @players[0]
    end
    if game_over?
      p 'Congratulations ' + @players[0].name + ', you won the game!'
      exit!
    end
    print_letters
    puts
    p 'Starting new round...'
  end

  def print_letters
    @players.each do |player|
      p player.name + ' has letters: ' + player.letters
    end
  end

  def game_over?
    @players.length == 1
  end

end