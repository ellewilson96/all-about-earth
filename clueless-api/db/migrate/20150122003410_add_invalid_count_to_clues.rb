class AddInvalidCountToClues < ActiveRecord::Migration[5.2]
  def change
    add_column :clues, :invalid_count, :integer
  end
end
