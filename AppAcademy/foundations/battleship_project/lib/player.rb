class Player
  # def get_move
  #   puts "enter a position with coordinates separated with a space like `4 7`"
  #   gets.chomp.split(" ").map(&:to_i)
  #   # convert user's input in array and turn each element into an integer
  # end
  def get_move
    puts "enter a position with coordinates separated with a space like `4 7`"
    user_input = gets.chomp
    user_input.split(" ").map(&:to_i)
  end
end
