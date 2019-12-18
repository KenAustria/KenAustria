class Player
    attr_reader :name

  def initialize(name, player_type = "human")
    @name = name
    @player_type = player_type
    @knowledge = {}
  end

  def guess(board_size, grid)
    if player_type = "human"
        
        unless valid_input
            puts "invalid input, please try again."
            guess
        end
        user_input
    # else
    #     # ai logic for turn
    #     unknown_cards = []
    #     board_size.times do |x|
    #         board_size.times do |y|
    #             unknown_cards.push([x, y]) if grid[x][y].nil?
    #         end
    #     end
    #     p unknown_cards
        # ai should guess random position left on board NOT in @knowledge
        # ai should then check if there's a match in @knowledge and use that pos
        # # then should drop the pos
        # if no match, random guess
        # if all in @knowledge, pull from @knowledge
        # if pulled from @knowledge, drop that k/v pair

        # turn should add card into @knowledge if type is ai and position not in @knowledge
        # turn two should check @knowledge, otherwise random guess
        # that should land in @knowledge as well, if it's not already there
    end
  end
end