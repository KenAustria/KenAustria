require "byebug"
# Debug this code to pass rspec! There are 2 mistakes to fix.

# Write a method, titleize, that accepts a string representing a title
# and capitalizes each word in a string except 'a', 'and', 'of', 'on', or 'the'.
# The first word of the title should be capitalized no matter what.

def titleize(title)
 exceptions = ["a", "and", "of", "on", "the"]
 new_title = title.split(" ").map { |char| !exceptions.include?(char) ? char.upcase : char.downcase }
 new_title.join(" ")
end

# def title_sen(sentence)
#   new_sen = sentence.split(" ")
#   new_sen.map do |word|
#     word[0][0].upcase + word.slice(1..-1).downcase
#   end
#   correct = new_sen.join(" ")
# end