#Objective: From root position, be able to visit all positions of the board in shortest path possible
require_relative "../00_tree_node.rb"

class KnightPathFinder
  attr_reader :start_pos

  #possible move for a knight from any position
  MOVES = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
  ]

  def self.valid_moves(pos)
    valid_moves = []

    cur_x, cur_y = pos
    MOVES.each do |(dx, dy|
      new_pos = [cur_x + dx, cur_y + dy]
      if new_pos.all? { |coord| coord.between?(0, 7) }
        valid_moves << new_pos
      end
    end

    valid_moves
  end

  def initialize(start_pos)
    @start_pos = start_pos
    @considered_positions = [start_pos]

    build_move_tree
  end

  def find_path(end_pos)
    end_node = root_node.dfs(end_pos)

    trace_path_back(end_node)
      .reverse
      .map(&:value)
  end

  private_constant  :MOVES

  private

  attr_accessor :root_node, :considered_positions

  def build_move_tree
    self.root_node = PolyTreeNode.new(start_pos) #root_node is an instance of PolyTreeNode

    # build the tree out in breadth-first fashion
    nodes = [root_node] #keep a queue of nodes
    until nodes.empty? #iterate through nodes, start with root_node because it's the first node in queue
      current_node = nodes.shift #nodes.pop would create a DFS approach to building the move tree

      current_pos = current_node.value
      new_move_positions(current_pos).each do |next_pos| #grab new_move_positions we can move to, from the current_position
        next_node = PolyTreeNode.new(next_pos) #for all new positions, we make a PolyTreeNode of that next_pos
        current_node.add_child(next_node) #then add that node as a child of the current_node
        nodes << next_node #push next_node into our queue
      end
  end

  #keep track of considere positions to not revisit same position
  def new_move_positions(pos) #grabs valid_move from Knight
    KnightPathFinder.valid_moves(pos)
      .reject { |new_pos| considered_positions.include?(new_pos) } #then rejects all the ones already put in considered positions
      .each { |new_pos| considered_positions << new_pos } #then adds new ones left to the ones we've already considered
  end

  def trace_path_back(end_node)
    nodes = []

    current_node = end_node
    until current_node.nil?
      nodes << current_node
      current_node = current_node.parent
    end

    nodes
  end
end

if $PROGRAM_NAME == __FILE__
  kpf = KnightPathFinder.new([0, 0]) #initialize starting position
  p kpf.find_path([7, 7])
end