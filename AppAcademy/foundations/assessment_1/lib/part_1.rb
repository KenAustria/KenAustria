def is_prime?(num)
  return false if num < 2
  (2...num).none? { |i| num % i == 0 }
end

def nth_prime(n)
  primes = []
  i = 1
  while primes.length < n
    primes << i if is_prime?(i)
    i += 1
  end
  primes.last
end

def prime_range(min, max)
  (min..max).select { |i| is_prime?(i) }
end