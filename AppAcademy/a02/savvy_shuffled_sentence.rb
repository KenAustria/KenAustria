# Write a method `savvy_shuffled_sentence` that takes in two sentences.
# The method should return a boolean indicating whether or not the sentences
# consist of the same exact *words*, but not necessarily in the same order.
#
# Your solution should have a linear - O(n) runtime, where n is the combined
# length of the input strings.
#
# Scoring: 8 points maximum
#   4 points awarded for passing all test cases
#   4 points awarded for linear runtime
#
# This component of the assessment is estimated to take 10 minutes.

def savvy_shuffled_sentence(sen_1, sen_2)
  hash_1 = Hash.new(0)
  hash_2 = Hash.new(0)
  new_sen_1 = sen_1.split(" ")
  new_sen_2 = sen_2.split(" ")

  new_sen_1.each { |word| hash_1[word] += 1 }
  new_sen_2.each { |word| hash_2[word] += 1 }

  hash_1 == hash_2
end


# Test Cases:
p savvy_shuffled_sentence("there is no spoon", "spoon there is no") # true
p savvy_shuffled_sentence("I do what I want to do", "I do what to want do I") # true
p savvy_shuffled_sentence("silent", "listen") # false
p savvy_shuffled_sentence("school master", "the classroom") # false
p savvy_shuffled_sentence("I do what I want to do", "what I want to do") # false
p savvy_shuffled_sentence("there is no spoon", "there is one spoon") # false
p savvy_shuffled_sentence("what the what", "what the") # false
p savvy_shuffled_sentence("what the", "what the what") # false
