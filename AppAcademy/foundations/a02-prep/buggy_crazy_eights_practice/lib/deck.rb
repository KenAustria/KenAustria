require_relative 'card'

# Represents a deck of playing cards.
class Deck
  # Returns an array of all 52 playing cards.
  def self.all_cards
    Card.suits.each do |suit|
      Card.values.each do |value|
        Card.new(value, suit)
      end
    end
  end

  def initialize(cards = Deck.all_cards)
    @cards = Deck.all_cards
  end

  # Returns the number of cards in the deck.
  def count
    @cards.count
  end

  def empty?
    @card.empty?
  end

  # Takes `n` cards from the top of the deck (front of the cards array).
  def take(n)
    fail 'not enough cards' if count <= n
    @cards.shift(n)
  end

  # Returns an array of cards to the bottom of the deck (back of the cards array).
  def return(new_cards)
    @cards << new_cards
  end
end
