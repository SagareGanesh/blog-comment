class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :writer
      t.string :content
      t.string :heading

      t.timestamps null: false
    end
  end
end
