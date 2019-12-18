class Board
  attr_reader :size

  def self.print_grid(grid)
    grid.each do |row|
      puts row.join(" ") #print each row of @grid
    end
  end

  def initialize(n)
    # {} for distinct arrays
    # specify to change elements of sub-arrays
    @grid = Array.new(n) { Array.new(n, :N) } #2D array
    @size = n * n #total size of the grid
  end

  def [](position)
    row, col = position # declare variables
    @grid[row][col] # return @grid element at given position
  end

  def []=(position, value) #set the given position of @grid to the given value
    row, col = position # declare variables
    @grid[row][col] = value # set given position with value
  end

  def num_ships #current count of :S values in @grid
    @grid.flatten.count { |el| el == :S }
  end

  def attack(position)
    if self[position] == :S #since we're using the [] method within our class, we call self[]
      self[position] = :H
      puts "you sunk my battleship!"
      return true
    else
      self[position] = :X
      return false
    end
  end

  def place_random_ships
    total_ships = @size * 0.25 #access 25% of the grid's elements that we will place a :S

    while self.num_ships < total_ships #as long as ships haven't reserved 25% of the grid's dimensions, do this
      random_row = rand(0...@grid.length) #generate random number for row to place :S
      random_col = rand(0...@grid.length) #generate random number for column to place :S
      position = [ random_row, random_col] #assign to position reference
      self[position] = :S #assign :S to those grid elements with self[] method
    end
  end

  def hidden_ships_grid
    @grid.map do |row| # iterate array
      row.map { |el| el == :S ? :N : el } # iterate row
    end
  end

  def cheat
    Board.print_grid(@grid)
  end

  def print
    Board.print_grid(self.hidden_ships_grid)
  end
end
