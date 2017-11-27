class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :first_name, allow_blank: true
      t.string :last_name, allow_blank: true
      t.string :address1, allow_blank: true
      t.string :address2, allow_blank: true
      t.string :city, allow_blank: true
      t.string :state, allow_blank: true
      t.string :zip, allow_blank: true
      t.decimal :subtotal, precision: 12, scale: 3
      t.decimal :tax, precision: 12, scale: 3
      t.decimal :shipping, precision: 12, scale: 3
      t.decimal :total, precision: 12, scale: 3
      t.references :order_status, foreign_key: true

      t.timestamps
    end
  end
end
