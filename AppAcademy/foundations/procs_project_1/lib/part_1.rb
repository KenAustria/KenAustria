def my_map(array, &prc)
  host_arr = [] # declare host array

  array.each do |ele| # iterate arr, for each element call &prc
    host_arr << prc.call(ele) # shovel each result into host array
  end

  host_arr # call host array
end

# def my_select(arr, &prc)
#   selected = [] # declare host array

#   arr.each do |el| # iterate array input
#     if prc.call(el) # if call to prc on element is true
#       host_arr << el # shovel into selected array
#     end
#   end

#   selected # return array
# end

# def my_count(arr, &prc)
#   # declare count variable
#   count = 0

#   arr.each do |el| # iterate array, call block on each element
#     if prc.call(el) # if true
#       count += 1 # increment count
#     end
#   end

#   count # return count
# end

# def my_any?(arr, &prc)
#   arr.each do |el| # iterate array, call block on each element
#     if prc.call(el) == true # if true, return true
#       return true
#   end

#   false # after all else, false
# end

# def my_all?(arr, &prc)
#   arr.each do |el| # iterate array input
#     if prc.call(el) == false # if true, return false
#       return false
#   end

#   true # after all else, return true
# end

# def my_none(arr, &prc)
#   arr.each do |el|
#     if prc.call(el) == true
#       return false
#     end
#   end
#   true
# end