def my_map(arr, &prc)
  host_arr = []
  arr.each do |el|
    host_arr << prc.call(el)
  end
  host_arr
end

def my_select(arr, &prc)
  host_arr = []
  arr.each do |el|
    if prc.call(el)
      host_arr << el
    end
  end
  host_arr
end

def my_count(arr, &prc)
  count = 0
  arr.each do |el|
    count += 1 if prc.call(el)
  end
  count
end

def my_any?(arr, &prc)
  arr.each do |el|
    if prc.call(el)
      return true
    end
  end
  false
end

def my_all?(arr, &prc)
  arr.none? do |el|
    !(prc.call(el))
  end
end

def my_none?(arr, &prc)
  arr.all? do |el|
    !(prc.call(el))
  end
end
