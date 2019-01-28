class DropCartsTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :carts
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
