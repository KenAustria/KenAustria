def my_reject(arr, &prc)
  arr.select { |el| !(prc.call(el)) }
end

def my_one?(arr, &prc)
  arr.count { |el| prc.call(el) } == 1
end

def hash_select(hash, &prc)
  new_hash = {}
  hash.each { |k, v| new_hash[k] = v if prc.call(k, v) }
  new_hash
end

def xor_select(arr, prc1, prc2)
  arr.select do |el|
    prc1.call(el) && !prc2.call(el) || !prc1.call(el) && prc2.call(el)
  end
end

def proc_count(n, arr)
  arr.count { |prc| prc.call(n) }
end
