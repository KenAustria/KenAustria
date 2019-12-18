require "set"
require_relative "player"

class Game
  ALPHABET = Set.new("a".."z")
  MAX_LOSS_COUNT = 5

  def initialize(*players)
    words = File.readlines("dictionary.txt").map(&:chomp)
    @dictionary = Set.new(words)
    @players = players
    @losses = Hash.new { |losses, player| losses[player] = 0 }
  end

  def run
    play_round until game_over?
    puts "#{winner} wins!"
  end

  private #cannot be called from outside of the object

  attr_reader :fragment, :dictionary, :losses, :players

  def game_over?
    remaining_players == 1
  end

  def play_round
    @fragment = ""
    welcome

    until round_over?
      take_turn
      next_player!
    end

    update_standings
  end

  ### HELPER METHODS ###
  def add_letter(letter)
    fragment << letter
  end

  def valid_play?(letter)
    return false unless ALPHABET.include?(letter) #only alphabetic letters

    potential_fragment = fragment + letter
    dictionary.any? { |word| word.start_with?(potential_fragment) } #is the new fragment a possible word in dictionary?
  end

  def is_word?(fragment)
    dictionary.include?(fragment)
  end

  def round_over?
    is_word?(fragment)
  end

  def current_player
    players.first #first index in players array
  end

  def previous_player
    (players.count - 1).downto(0).each do |i| #iterate down to 0 from last index,
      player = players[i] #reassign player as current index

      return player if losses[player] < MAX_LOSS_COUNT
    end
  end

  def next_player!
    players.rotate! #Rotates self in place so that the element at count comes first, and returns self
    # keep rotating until we find a player who hasn't been eliminated
    players.rotate! until losses[current_player] < MAX_LOSS_COUNT
  end

  def remaining_players #exclude player's with 5 losses from further rounds
    losses.count { |_, v| v < MAX_LOSS_COUNT }
  end

  def winner
    (player, _) = losses.find { |_, losses| losses < MAX_LOSS_COUNT }
    player
  end

  def record(player)
    count = losses[player]
    "GHOST".slice(0, count)
  end

  ### UI METHODS (display game status and prompts to players) ###
  def welcome
    system("clear")
    puts "Let's play a game of Ghost!"
    display_standings
  end

  def take_turn
    system("clear")
    puts "It's your turn #{current_player}, make a guess!"
    letter = nil

    until letter #letter is initiated as nil, so `until it's true`
      letter = current_player.guess(fragment)
      unless valid_play?(letter) #if the player's guess is invalid
        current_player.alert_invalid_guess(letter) #alert the player
        letter = nil #reset letter to nil
      end
    end

    add_letter(letter)
    puts "#{current_player} added the letter '#{letter}' to the fragment."
  end

  def display_standings
    puts "Current Standings:"

    players.each do |player|
      puts "#{player}: #{record(player)}"
    end

    sleep(2)
  end

  def update_standings
    system("clear")
    puts "#{previous_player} spelled #{fragment}."
    puts "#{previous_player} gets a letter!"
    sleep(1)

    if losses[previous_player] == MAX_LOSS_COUNT - 1
      puts "#{previous_player} has been eliminated!"
      sleep(1)
    end

    losses[previous_player] += 1
    display_standings
  end
end

# Only run the following code when this file is the main file being run
# instead of having been required or loaded by another file
if $PROGRAM_NAME == __FILE__
  game = Game.new(
    Player.new("Gizmo"), 
    Player.new("Breakfast"), 
    Player.new("Toby"),
    Player.new("Leonardo")
    )

  game.run
end