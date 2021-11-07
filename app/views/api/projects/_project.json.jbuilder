json.extract! project, :body, :title, :description, :id, :start_date, :end_date, :goal, :risks
json.author project.author.name
json.location project.location.name
json.category project.category.name
json.pledged_amt project.pledged
json.faqs project.faqs do |faq|
    json.extract! faq, :question, :answer
end
json.pledged project.rewards
json.rewards project.rewards do |reward|
    json.extract! reward, :pledge_amount, :title, :description, :delivery_date, :limit, :shipping_type
    json.pledges reward.pledges do |pledgee|
        json.extract! pledgee.pledge, :name
        json.extract! pledgee, :pledge_amount
    end

end