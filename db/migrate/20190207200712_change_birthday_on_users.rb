class ChangeBirthdayOnUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthday 
    add_column :users, :birth_month, :string
    add_column :users, :birth_date, :integer
  end
end
