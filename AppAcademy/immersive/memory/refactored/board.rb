# display_board will return board.grid

class Board
  attr_reader :grid # DELETE?

  def initialize(difficulty)
    
    @grid = Array.new(4) { Array.new(4) }

    @grid.size.times do |x|
      @grid.size.times do |y|
        @grid[x][y] = Card.new("X")
      end
    end

    @grid[1][1] = Card.new("G")
    @grid[2][2] = Card.new("G")
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end


end