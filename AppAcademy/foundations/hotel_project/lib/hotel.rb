require_relative "room"

class Hotel
  attr_reader :rooms # hash of room name's and capacities
  def initialize(name, capacities)
    @name = name
    @rooms = Hash.new(0)
    capacities.each do |room_name, capacity|
      @rooms[room_name] = Room.new(capacity)
    end
  end

  def name
    new_name = @name.split(" ").map(&:capitalize).join(" ")
  end

  def room_exists?(room_name)
    @rooms.has_key?(room_name)
  end

  def check_in(occupant, room_name)
    if self.room_exists?(room_name) # check if the room exists
      # we know add_occupant is successful or fails because it returns a boolean
      if @rooms[room_name].add_occupant(occupant) #add_occupant on the correct Room instance
        puts "check in successful"
      else
        puts "sorry, room is full"
      end
    else # room does not exist
      puts "sorry, room does not exist"
    end
  end

  def has_vacancy?
    @rooms.values.any? { |room_name| room_name.available_space > 0}
  end

  def list_rooms
    @rooms.each do |room_name, room| # key is room_name, value is room instance
      puts "#{room_name} : #{room.available_space}" # print room name and available space in that room
    end
  end
end
