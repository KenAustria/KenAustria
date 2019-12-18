# def upcase(str)
#   return str.upcase if str.length == 1
#   puts str
#   p str[0].upcase + upcase(str[1..-1])
# end
# # upcase("hello")
# # (H + upcase(str[1..-1])) #str = "hello"
# #   +(E + upcase(str[1..-1])) #str = "ello"
# #     +(L + upcase(str[1..-1])) #str = "llo"
# #       +(L + upcase(str[1..-1])) #str = "lo"
# #         +(O) #str = "o" base case
# # =>"HELLO"

# def reverse(str)
#   return str if str.length <= 1
#   str[-1] + reverse(str[0..-2])
# end
# # reverse("hello")
# # "o" + reverse(str[0..-2]) #str = "hell"
# #   "l" + reverse(str[0..-2]) #str = "hel"
# #     "l" + reverse(str[0..-2]) #str = "he"
# #       "e" + reverse(str[0..-2]) #str = "h"
# #         "h" #base case
# # =>"olleh"

# def quick_sort(arr)
#   return arr if arr.length <= 1
#   pivot_arr = [arr.first]
#   left_side = arr[1..-1].select { |el| el < arr.first}
#   right_side = arr[1..-1].select { |el| el > arr.first}
#   quick_sort(left_side) + pivot_arr + quick_sort(right_side)
# end
# arr = [2, 5, 3, 8, 1]

# # 1ST ITERATION
# # pivot_arr = [2]
# # left_side = [1]
# # right_side = [5, 3, 8]

# # 2ND ITERATION => arr = [5, 3, 8]
# # pivot_arr = [5]
# # left_side = [3]
# # right_side = [8]
# # [3] + [5] + [8] => [3, 5, 8]

# # 3RD ITERATION
# # pivot_arr = [2]
# # left_side = [1]
# # right_side = [3, 5, 8]
# # [1] + [2] + [3, 5, 8] => [1, 2, 3, 5, 8]
