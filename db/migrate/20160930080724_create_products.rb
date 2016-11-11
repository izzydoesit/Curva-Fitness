class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_url
      t.decimal :price, null: false
      t.string :category
      t.string :subcategory

      t.timestamps
    end
  end
end
