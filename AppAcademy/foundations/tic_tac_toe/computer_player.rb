class ComputerPlayer
  attr_reader :name, :board
  attr_accessor :mark

  def initialize(name)
    @name = name
    @mark = :O
  end

  def display(board)
    @board = board
  end

  def get_move
    # winning row
    grid.board.each_with_index do |row, i|  #=> [[_, _, _], [_, _, _], [_, _, _]]
      return [i, nil_index(row)] if winning?(row) #=> [[X, X, _], [_, _, _], [_, _, _]]
    end

    # winning col
    grid.board.transpose.each_with_index do |col, i| #=> [[_, _, _], [_, _, _], [_, _, _]]
      return [i, nil_index(col)] if winning?(col) #=> [[X, _, _], [X, _, _], [X, _, _]]
    end

    # winning forward diag
    forward_diag = []
    (0..board.grid.length - 1).each do |i| #copy grid
      forward_diag << board[i, i]
      if winning?(forward_diag)
        return [nil_index(forward_diag), nil_index(forward_diag)]
      end
    end

    # winning backward diag
    backward_diag = []
    (0..board.grid.length - 1).each do |i|
      backward_diag << board.grid.map(&:reverse)[i][i]
      if winning?(backward_diag)
        return [nil_index(backward_diag, nil_index(backward_diag))]
      end
    end

    # all else
    random_move
  end

  def nil_index(array)
    array.index(nil)
  end

  def winning?(array)
    array.count(mark) == 2 && array.include?(nil) # is this the winning combo? [X, X, _]
  end

  def random_move
    empty_grid = []
    (0..board.grid.length - 1).each do |row, row_idx| #iterate for rows
      (0..board.grid.length - 1).each do |tile, col_idx| #now iterate col, but reference as tile
        empty_grid << [row_idx, col_idx] if tile.nil?
      end
    end
    empty_grid.sample
  end
end