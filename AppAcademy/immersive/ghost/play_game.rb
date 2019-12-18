require "./game.rb"
p 'Welcome to Ghost! How many players would you like to play with?'
num_players = gets.chomp.to_i
game = Game.new(num_players)
game.play_round until game.game_over?