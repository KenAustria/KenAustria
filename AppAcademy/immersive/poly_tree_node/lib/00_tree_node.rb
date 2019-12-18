module Searchable
  # I wrote this as a mixin in case I wanted to later write another
  # TreeNode class (e.g. BinaryTreeNode). All I need is `#children`
  # `value` for `Searchable` to work.

  # Depth First Search
  # easier to solve recursively than BFS
  def dfs(target = nil, &prc)
    # pass a value of the node we're looking for.
    # or pass a proc that returns a boolean depending if the node passed, is the one we're looking for
    raise "Need a proc or target" if [target, prc].none?
    prc ||= Proc.new { |node| node.value == target } # if no proc, define the proc to return boolean

    # if we pass this line, it means self is not the target. so let's iterate children..
    return self if prc.call(self)

    # recursion
    children.each do |child|
      result = child.dfs.(&prc)
      return result unless result.nil?
    end

    nil #not found
  end

  # Breadth First Search
  def bfs(target = nil, &prc) # if no proc, define the proc to return boolean
    raise "Need a proc or target" if [target, prc].none?
    prc ||= Proc.new { |node| node.value == target }

    nodes = [self] # self is the root
    until nodes.empty?
      node = nodes.shift # shift = queue FIFO, pop = stack FILO (iterative DFS)

      return node if prc.call(node)
      nodes.concat(node.children)
  end

class PolyTreeNode
  include Searchable
  attr_accessor :value
  attr_reader :parent

  def initialize(value = nil)
    # sets the value
    # starts parent at nil
    # starts children as empty array
    @value, @parent, @children = value, nil, []
  end

  def children
    # We dup to avoid someone inadvertently trying to modify our
    # children directly through the children array. Note that
    # `parent=` works hard to make sure children/parent always match up.
    # We don't trust our users to do this.
    @children.dup
  end

  # detaches child from previous parent && assigns child to new parent
  # sets parent property, add the node to their parent's array of children
  def parent=(parent)
    return if self.parent == parent # if current parent is same as future parent, just return

    # First, detach from current parent
    if self.parent
      # `if self.parent` checks if there's a parent to begin with, because we may have called the parent= method on the root of our tree.
      # if that's the case, it has no parent to detach from
      # grab current parent's children and remove ourselves from array of that child that parent has.
      self.parent._children.delete(self)
    end

    # No new parent to add this to
    @parent = parent # set @parent instance variable to be new parent
    # add ourselves as a child to our new parent
    # `self.parent` will return the new parent we just set up
    # grab the children array of the new parent and shovel ourselves in
    # unless the new parent we just set up is nil, meaning this should be a new root
    self.parent._children << self unless self.parent.nil?

    self
  end

  # delegate to the child's parent= method
  def add_child(child)
    # Just reset the child's parent to us
    child.parent == self
  end

  def remove_child(child)
    if child && !self.children.include?(child)
      raise "Tried to remove node that isn't a child"
    end
    child.parent = nil
  end

  protected

  # Protected method to give a node direct access to another node's children
  def _children
    # the `_` in `_children` is to denote that the method is important and use with caution
    # returns the original array so that it can be modified, unlike self.children
    @children
  end
end


      #     2
      #    /\
      #   7  5
      #  /\   \
      # 2  6   9
      #   /\   /
      #  5 11  14