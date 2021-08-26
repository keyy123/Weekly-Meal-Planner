class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.integer :kcal
      t.integer :pro
      t.integer :carbs
      t.integer :fat
      t.references :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
