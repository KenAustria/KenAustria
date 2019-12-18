require_relative 'card'

# Represents a deck of playing cards.
class Deck
  #Returns an array of all 52 playing cards.
  def self.all_cards
    combos = Card.suits.product(Card.values)
    combos.map { |suit, value| Card.new(suit, value) }
  end

  def initialize(cards = Deck.all_cards)
    @cards = cards
  end

  # Returns the number of cards in the deck.
  def count
    @cards.count
  end

  # Takes `n` cards from the top of the deck.
  def take(n)
    raise "not enough cards" if n > count
    @cards.shift(n)
  end

  # Returns an array of cards to the bottom of the deck.
  def return(new_cards)
    @cards.concat(new_cards)
  end
end
