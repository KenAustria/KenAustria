# this needs & for proc argument
def reverser(str, &prc)
  prc.call(str.reverse) # reverse the string, then pass to block
end

def word_changer(str, &prc)
  new_str = str.split(" ") # split string input into array of words
  foo = new_str.map { |word| prc.call(word)} # call prc on every word, returning new array
  foo.join(" ") # array to string
end

def greater_proc_value(num, prc_1, prc_2)
  foo = prc_1.call(num)
  baz = prc_2.call(num)
  if foo > baz
    return foo
  else
    return baz
  end
end

def and_selector(arr, prc_1, prc_2)
  host_arr = []

  arr.each do |el|
    if prc_1.call(el) && prc_2.call(el)
      host_arr << el
    end
  end
  host_arr
end

def alternating_mapper(arr, prc_1, prc_2)
  host_arr = []
  arr.each_with_index do |el, i|
    if i % 2 == 0 # or idx.even?
      host_arr << prc_1.call(el)
    else # idx.odd?
      host_arr << prc_2.call(el)
    end
  end
  host_arr
end