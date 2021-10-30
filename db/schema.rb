# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_30_222719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name"
  end

  create_table "faqs", force: :cascade do |t|
    t.integer "project_id", null: false
    t.text "question", null: false
    t.text "answer", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_locations_on_name"
  end

  create_table "pledges", force: :cascade do |t|
    t.integer "pledge_id", null: false
    t.float "pledge_amount", null: false
    t.integer "reward_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.text "body", null: false
    t.integer "category_id", null: false
    t.integer "location_id", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.integer "goal", null: false
    t.text "risks", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_projects_on_author_id"
    t.index ["title"], name: "index_projects_on_title", unique: true
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "pledge_amount", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.datetime "delivery_date", null: false
    t.integer "limit", null: false
    t.integer "project_id", null: false
    t.string "shipping_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_rewards_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "create_at"
    t.datetime "updated_at"
    t.string "session_token", null: false
    t.integer "location_id"
    t.string "biography"
    t.datetime "created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
