require 'rspec'
require 'hand'
require 'card'

describe Hand do
  # We're making Card instances here and throughout. In general, it's better
  # to use doubles for instances of any class other than the one currently
  # being tested. But the Hand class sorts the cards, which uses the Card#<=> 
  # method. If we used card doubles, we'd need to simulate the behavior of 
  # Card#<=>, which would be very cumbersome.
  let(:cards) {[
                Card.new(:spades, :ten),
                Card.new(:hearts, :five),
                Card.new(:hearts, :ace),
                Card.new(:diamonds, :two),
                Card.new(:hearts, :two)
              ]}

  subject(:hand) { Hand.new(cards) }

  describe '#initialize' do
    it 'accepts cards correctly' do
      expect(hand.cards).to match_array(cards)
    end

    it 'raises an error if not five cards' do
      expect do
        Hand.new(cards[0..3])
      end.to raise_error 'must have five cards'
    end
  end

  describe '#trade_cards' do
    let!(:take_cards) { hand.cards[0..1] }
    let!(:new_cards) { [Card.new(:spades, :five), Card.new(:clubs, :three)] }

    it 'discards specified cards' do
      hand.trade_cards(take_cards, new_cards)
      expect(hand.cards).to_not include(*take_cards)
    end

    it 'takes specified cards' do
      hand.trade_cards(take_cards, new_cards)
      expect(hand.cards).to include(*new_cards)
    end

    it 'raises an error if trade does not result in five cards' do
      expect do
        hand.trade_cards(hand.cards[0..0], new_cards)
      end.to raise_error 'must have five cards'
    end

    it 'raises an error if trade tries to discard unowned card' do
      expect do
        hand.trade_cards([Card.new(:hearts, :ten)], new_cards[0..0])
      end.to raise_error 'cannot discard unowned card'
    end
  end

end
