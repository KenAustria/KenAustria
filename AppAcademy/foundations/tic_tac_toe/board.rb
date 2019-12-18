class Board
  attr_reader :grid

  def self.blank_grid
    Array.new(3) { Array.new(3) }
  end

  def initialize(grid = self.class.blank_grid)
    @grid = grid
  end

  def [](position)
    row, col = position[0], position[1]
    @grid[row][col]
  end

  def []=(position, mark)
    row, col = position
    @grid[row][col] = mark
  end

  def place_mark(position, mark)
    row, col = position[0], position[1]
    @grid[row][col] = mark
  end

  def empty?(position)
    self[position].nil?
  end

  def winner
    return :X if winning_marks?(:X)
    return :O if winning_marks?(:O)
    return "It's a tie!" if @grid.none? { |row| row.include?(nil) }
  end

  def winning_marks?(mark)
    return true if winning_row? || winning_col? || winning_diag?
    false
  end

  def winning_row?(mark)
    (0..@grid.length - 1).each do |row|
      return true if @grid[row].all? { |tile| tile == mark }
    end
    false
  end

  def winning_col?(mark)
    (0..@grid.length - 1).transpose do |col|
      return true if @grid[col].all? { |tile| tile == mark }
    end
    false
  end

  def winning_diag?(mark)
    forward_diag = []
    backward_diag = []

    (0..@grid.length - 1).each do |i|
      forward_diag << self[i][i]
    end
    return true if forward_diag.all? { |tile| tile == mark }

    (0..@grid.length - 1).each do ||
      backward_diag << grid.map(&:reverse)[i][i]
    end
    return true if backward_diag.all? { |tile| tile == mark }

    # if no diags
    false
  end

  def game_over?
    return false if !winner
    true
  end
end