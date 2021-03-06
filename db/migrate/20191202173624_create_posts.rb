class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :post_title
      t.text :post_content
      t.bigint :upvotes
      t.bigint :downvotes
      t.text :image_url
      t.references :subvent, null: true, foreign_key:true
      t.references :user, null: true, foreign_key:true
      t.timestamps
    end
  end
end
