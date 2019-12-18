class Human_Player
  def get_input
    prompt
    parse(STDIN.gets.chomp)
    #STDIN.gets.chomp() = read user's input
    #gets.chomp() = read ARGV first
  end

  def prompt
    puts "Please enter the position of the card you'd like to flip (e.g., '2,3')"
    print "> "
  end

  def parse(string)
    string.split(",").map { |x| Integer(x) }
  end

  def receive_revealed_card(pos, value)
    #duck typing
    #checks whether the object passed as an argument responds to the Game#make_guess method
    #if it responds, then we're all good
  end
end