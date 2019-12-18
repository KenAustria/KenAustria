require_relative "card"

class Board
  attr_reader :size

  def initialize(size = 4)
    @grid = Array.new(size) { Array.new(size) }
    @size = size
    self.populate
  end

  def [](pos)
    row, col = pos
    grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end

  def hide(pos) #calls Card#hide, switching @revealed to false
    self[pos].hide
  end

  def reveal(pos)
    if revealed?(pos) #if true, alert user
      puts "You can't flip a card that has already been revealed."
    else
      self[pos].reveal #else false, so switch @revealed to true
    end
    self[pos].value #show the value
  end

  def populate #fill the board with a set of shuffled Card pairs
    num_pairs = (size**2) / 2 # raises size to the power of numeric, then divide by 2
    cards = Card.shuffled_pairs(num_pairs) # the cards are the pairs shuffled
    grid.each_index do |i|
      grid[i].each_index do |j|
        self[[i, j]] = cards.pop #???
      end
    end
    # [i[j, j, j, j]
    #  i[j, j, j, j]
    #  i[j, j, j, j]
    #  i[j, j, j, j]]
  end

  def render #print out a representation of the Board's current state
    system("clear")
    puts " #{(0...size).to_a.join(' ')}" # if size=4, then "0 1 2 3"
    grid.each_with_index do |row, i|
      puts "#{i} #{row.join(' ')}"
    end
  end

  def revealed?(pos) # ??? calling on itself?
    self[pos].revealed?
  end

  def won? #return true if all cards have been revealed
    @grid.all? do |row| #iterate every row on @grid
      row.all?(&:revealed?) #iterate every element in row and call revealed on each element
      end
    end
  end

  private

  attr_reader :grid
end