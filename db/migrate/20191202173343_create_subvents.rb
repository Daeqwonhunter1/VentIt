class CreateSubvents < ActiveRecord::Migration[6.0]
  def change
    create_table :subvents do |t|
      t.string :vent_title
      t.text :description
      t.text :image_url
      t.bigint :subvent_upvotes
      t.bigint :subvent_downvotes
      t.bigint :members

      t.timestamps
    end
  end
end
