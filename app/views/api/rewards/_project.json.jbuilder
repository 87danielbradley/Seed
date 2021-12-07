json.extract! reward, :pledge_amount, :title, :description, :delivery_date, :limit, :project_id, :shipping_type
# json.author reward.author.name
# json.location reward.location.name
# json.category reward.category.name
# json.pledged_amt reward.pledged[:total]
# json.pledge_count reward.pledged[:count]
# json.faqs reward.faqs do |faq|
#     json.extract! faq, :question, :answer
# end
# json.pledged reward.rewards
# json.rewards reward.rewards do |reward|
#     json.extract! reward, :pledge_amount, :title, :description, :delivery_date, :limit, :shipping_type
#     json.pledges reward.pledges do |pledgee|
#         json.extract! pledgee.pledge, :name
#         json.extract! pledgee, :pledge_amount
#     end

# end