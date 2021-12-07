json.array! @rewards do |reward|
    json.partial! 'api/rewards/reward', reward: reward
end


