require_relative "card.rb" # DELETE
require_relative "board.rb" # DELETE

class AI
  attr_reader :board_state # DELETE

  def initialize()
    @name = "bot" + rand(0..17).to_s
    @score = 0
    @board_state = {}
    @previous_guess = nil
  end

  def increase_score(value)
    @score += value
  end

  def decrease_score(value)
    @score -= value
  end

  def unknown_guess
    unknown = @board_state.keep_if { |key, value| value['value'] == "?" && !value['paired']}
    p "UNKNOWN"
    p unknown
    return unknown.keys.sample unless unknown.keys.length < 1
    false
  end

  def known_guess
    known = @board_state.keep_if { |key, value| value['value'] == @previous_guess && !value['paired']} 
    p "KNOWN"
    p known
    return known.sample unless known.keys.length < 1
    false
  end

  def get_guess(turn)
    p "TURN"
    p turn
    if turn == 1
      return unknown_guess if unknown_guess
      return known_guess
    else
      return known_guess if known_guess
      return unknown_guess
    end
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
    @previous_guess = #
  end

  def set_state(board, card_pos, card_instance)
    if board[card_pos].face_up?
      @board_state[card_pos] = {"value" => card_instance.value, "paired" => card_instance.is_paired?}
    elsif board[card_pos].is_bomb?
      @board_state[card_pos] = {"value" => card_instance.value, "paired" => true}
    else
      @board_state[card_pos] = {"value" => "?", "paired" => card_instance.is_paired?}
    end
  end

  def print(board)
    board.grid.each_with_index do |row, row_idx|
      row.each do |card_instance|
        card_idx = row.index(card_instance)
        card_pos = [row_idx, card_idx]
        set_state(board, card_pos, card_instance)
      end
    end
  end
end

roboto = AI.new

b = Board.new("1")

roboto.print(b)

p roboto.get_guess(1)
p roboto.get_guess(2)