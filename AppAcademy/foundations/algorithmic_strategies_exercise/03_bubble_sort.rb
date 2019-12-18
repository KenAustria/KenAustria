require "byebug"
# Reimplement the bubble sort outlined in the preceding lecture.
# The bubble_sort method should accept an array of numbers and arrange the elements in increasing order.
# The method should return the array.
# Do not use the built-in Array#sort

def bubble_sort(arr)
  sorted = false

  while !sorted # while true
    sorted = true # assume it's sorted, then switch after iteration
    # iterate up to but not including the arr.length (because indices start at 0)
    # arr.length-1 to not step outside the range
    (0...arr.length-1).each do |i|
      if arr[i] > arr[i+1] # if current index is greater than next index
        arr[i], arr[i+1] = arr[i+1], arr[i] # swap elements
        sorted = false # may need a second pass across array to swap so continue
      end
    # if `sorted = false` is set here.
    # it will make one pass across the array.
    # but existing elements may still need to be swapped
    # we need to make as many passes needed till all elements are in ascending order
    end
  end

  arr
end


# no comments version
def bubble_sort(arr)
  sorted = false

  while !sorted
    sorted = true
    (0...arr.length-1).each do |i|
      if arr[i] > arr[i+1]
        arr[i], arr[i+1] = arr[i+1], arr[i]
        sorted = false
      end
    end
  end

  arr
end

p bubble_sort([2, 8, 5, 2, 6])      # => [2, 2, 5, 6, 8]
p bubble_sort([10, 8, 7, 1, 2, 3])  # => [1, 2, 3, 7, 8, 10]
