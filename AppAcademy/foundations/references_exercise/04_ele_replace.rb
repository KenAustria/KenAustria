require "byebug"
# Write a method, ele_replace!(array, hash), that accepts an array and a hash as args.
# The method should mutate the given array by replacing elements with their corresponding values in the hash.
# The method should return the given array.
#
# Note: this method must MUTATE the input array. This means that the object_id of the input array should be identical
# to the object_id of the returned array. The exact object_ids you get back don't matter. We just want the ids
# to be the same before and after calling your method.

# MUTABLE
def ele_replace!(array, hash)
  # iterate array with map to mutate input array
  # if current element is a hash key
  # reassign that element to the value of identical hash[key]
  array.map! do |el|
    # if the el is a key of the hash, replace with value or keep as is
    hash.has_key?(el) ? hash[el] : el
  end
end

# IMMUTABLE
def ele_replace!(array, hash)
  array.map do |el|
    if hash.has_key?(el)
      el = hash[el]
    end
  end
end

array_1 = [4, 2, 0, 2]
p array_1.object_id         # => 70119569670520
result_1 = ele_replace!(array_1, {2=>"two", 0=>"zero", 5=>"five"})
p result_1                  # => [4, "two", "zero", "two"]
p result_1.object_id        # => 70119569670520


array_2 = ["Matthias", "Simcha", "Mashu", "David"]
p array_2.object_id         # => 70119569668160
result_2 = ele_replace!(array_2, "Matthias"=>"J", "Mashu"=>"D")
p result_2                  # => ["J", "Simcha", "D", "David"]
p result_2.object_id        # => 70119569668160