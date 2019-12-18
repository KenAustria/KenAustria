require "byebug"

def all_words_capitalized?(arr)
  arr.all? { |word| word.capitalize == word }
  # iterate through array of words
  # if word isn't capitalize, return false
  # capitalize method capitalizes the first char and lowecases the rest of the char
  # arr.all? do |word|
  #   word[0][0].upcase + word.slice(1..-1).downcase
  # end
end

def no_valid_url?(urls)
  valid_ends = [".com", ".net", ".io", ".org"] # declare host array urls

  # .none?, are no urls valid?
  # do any of these urls end with a valid ending?
  # if 1 url ends with valid_ends, therefore returning false to none? method
  urls.none? do |url|
    valid_ends.any? { |ending| url.end_with?(ending) }
  end

end

def any_passing_students?(students)
  # iterate students array of student hashes with `any` method
  students.any? do |student|
    grades = student[:grades] # keep DRY
    avg = grades.sum / (grades.length * 1.0) # find average of student's grade, beware decimals
    avg >= 75 # if a student's average is >= 75, return true
  end
end