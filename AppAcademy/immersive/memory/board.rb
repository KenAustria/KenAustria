require_relative "card.rb"

class Board

  attr_reader :grid # not production plz
  def initialize(settings)
    @board_size = settings[0]
    @card_types = settings[1]
    @bomb_count = settings[2]
    @grid = set_board(@board_size, @card_types, @bomb_count)
  end

  def set_board(board_size, card_types, bomb_count)
    card_types_hash = {
      4 => ["R", "G", "B", "Y"],
      5 => ["R", "G", "B", "Y", "O"],
      6 => ["R", "G", "B", "Y", "O", "P"],
      8 => ["R", "G", "B", "Y", "O", "P", "M", "C"]
    }
    cards_created = (board_size * board_size) - bomb_count
    cards = []
    while cards_created > 0
      card_value = card_types_hash[card_types].sample
      2.times do |i| 
        cards << Card.new(card_value)
      end
      cards_created -= 2
    end

    grid = Array.new(board_size) { Array.new(board_size) }

    # set bombs
    cards_created = (board_size * board_size) - bomb_count
    while grid.flatten.count(nil) > cards_created
        x = rand(0...board_size)
        y = rand(0...board_size)
        grid[x][y] = Card.new("X", true) unless grid[x][y]
    end

    pos_array = []
    while pos_array.count < cards_created
        board_size.times do |x|
            board_size.times do |y|
                pos_array.push([x, y]) if grid[x][y].nil?
            end
        end
    end
    
    while grid.flatten.count(nil) > 0
      cards.each do |card|
        pos = pos_array.sample
        grid[pos[0]][pos[1]] = card 
        pos_array.delete_at(pos_array.index(pos))
      end
    end
    grid
  end

  def display_board
    puts "  " + (1..@grid.length).to_a.join(" ")
    @grid.each_with_index do |row, idx|
      puts "#{idx + 1} " + row.map { |i| i.face_up? ? i.value : "?" }.join(" ")
    end
  end

  def clear(n = 0)
    sleep(n)
    system("clear")
  end
end