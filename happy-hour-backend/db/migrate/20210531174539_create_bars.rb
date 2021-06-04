class CreateBars < ActiveRecord::Migration[6.1]
  def change
    create_table :bars do |t|
      t.string :name
      t.datetime :verified
      t.boolean :sunday
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :saturday
      t.time :start
      t.time :end
      t.text :details
      t.integer :phone
      t.string :address
      t.decimal :lat
      t.decimal :lng
      t.string :website
      t.string :image
      t.string :place_id

      t.timestamps
    end
  end
end
