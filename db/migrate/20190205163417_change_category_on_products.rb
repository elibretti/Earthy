class ChangeCategoryOnProducts < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :category, :string, null: false
  end
end
