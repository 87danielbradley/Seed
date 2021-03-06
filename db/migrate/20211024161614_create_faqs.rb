class CreateFaqs < ActiveRecord::Migration[5.2]
  def change
    create_table :faqs do |t|
      t.integer :project_id, null: false
      t.text :question, null: false
      t.text :answer, null: false

      t.timestamps
    end
  end
end
