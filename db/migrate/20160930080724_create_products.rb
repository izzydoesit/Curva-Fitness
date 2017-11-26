class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.boolean :active, default: true
      t.string :brand, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :image_url
      t.decimal :price, null: false
      t.string :category

      t.timestamps
    end
  end
end
