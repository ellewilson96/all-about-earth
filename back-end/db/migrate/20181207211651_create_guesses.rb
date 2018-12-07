class CreateGuesses < ActiveRecord::Migration[5.2]
  def change
    create_table :guesses do |t|
      t.integer :guess
      t.date :date
      t.string :answer
    end
  end
end
