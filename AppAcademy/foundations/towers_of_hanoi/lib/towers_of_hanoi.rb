class TowersOfHanoi
  attr_reader :towers

  def initialize
    @towers = [[3, 2, 1], [], []] #sub_array for each tower, first tower with disk in descending order
  end

  def play
    until won?
      puts render
      get_move
    end
    conclude
  end

  def move(from_tower, to_tower)
    disc = @towers[from_tower].pop
    @towers[to_tower].push(disc)
  end

  def get_move
    print "Enter a move (ex. from to): " #using print because `gets` will print on the same line
    input = gets.chomp # ("02")
    from_tower, to_tower = input.split(" ").map(&:to_i) # [0, 2]

    until valid_move?(from_tower, to_tower) # keep prompting user until valid move is received
      from_tower, to_tower = get_valid_move
    end

    move(from_tower, to_tower)
  end

  def get_valid_move
    print "Please enter a valid move: "
    input = gets.chomp
    input.split(" ").map(&:to_i) # don't need to set `from_tower, to_tower =`, just return. ex: [0, 2]
  end

  # ??? print 3 rows with towers at each level
  def render
    # '>=' if a tower is taller than height 2, we still want to register at the middle row
    top_row = towers.map { |tower| tower.length >= 3 ? tower[2] : " " } # top row represents towers with 3 disc
    mid_row = towers.map { |tower| tower.length >= 2 ? tower[1] : " " } # mid row represents towers with 2 disc
    bottom_row = towers.map { |tower| tower.length >= 1 ? tower[0] : " " } # bottomw row represents towers with 1 disc
    "#{top_row.join(' ')}\n#{mid_row.join(' ')}\n#{bottom_row.join(' ')}\n_ _ _" # bases should match tower size

    # "[[_, _, _], => top_row
    #  [_, _, _],  => mid_row
    #  [_, _, _]]" => bottom_row
  end

  def valid_move?(from_tower, to_tower)
    from = @towers[from_tower]
    to = @towers[to_tower]
    return false if from.empty? #can't move a disc without a disc
    return false if !to.empty? && from.last > to.last #WHY?: to_tower needs to be empty otherwise not possible for its top disc to be smaller
    true
  end

  def won?
    return true if (@towers[1].length == 3) && (@towers[2].length == 3)
    false
  end

  def conclude
    puts "You've won!"
    puts render
  end
end

if __FILE__ == $PROGRAM_NAME #called on file directly
  t = TowersOfHanoi.new
  t.play
  # puts t.render
  # t.move(0, 2)
  # puts t.render
end


#By Majid & Ken
# class TowersOfHanoi
#   attr_reader :towers

#   def initialize
#     @towers = [[3, 2, 1], [], []] #sub_array for each tower, first tower with disk in descending order
#   end

#   def move(from_tower, to_tower)
#     if self.valid_move?(from_tower, to_tower)
#       num = @towers[from_tower].pop
#       @towers[to_tower].push(num)
#     end 
#   end
#   def move(from_tower, to_tower)
#     disc = from_tower.pop
#     @towers[to_tower].push(disc)
#   end

#   def valid_move?(from_tower, to_tower)
#     return false if @towers[from_tower].empty?
#     if !@towers[to_tower].empty?
#         if (@towers[from_tower].last < @towers[to_tower].last)
#             return true
#         else
#             return false
#         end
#     else
#         return true
#     end
#   end
 
#   def won?
#     if @towers[1].length == 3 || @towers[2].length == 3
#        return true
#     else
#         false
#     end
#   end
#  end