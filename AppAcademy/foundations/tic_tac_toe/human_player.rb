class HumanPlayer
  attr_reader :name
  attr_accessor :mark

  def initialize(name)
    @name = name
    @mark = :X
  end

  def display_row(board, index)
    row = board.grid[index].map { |tile| tile.nil ? "" : tile.to_s }
    row.join("|")
  end

  def display(board)
    row_1 = display_row(board, 0)
    row_2 = display_row(board, 1)
    row_3 = display_row(board, 2)
    puts " #{row_1} \n-----------\n #{row_2} \n-----------\n #{row_3} "
  end

  def get_move
    puts "To place a mark, enter a move in the form of '0, 0'"
    player_input = gets.chomp
    player_input.split(", ").map { |num| (:to_i) }
  end
end