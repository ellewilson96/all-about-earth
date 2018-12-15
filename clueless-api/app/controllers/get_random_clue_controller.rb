class GetRandomClueController < ApplicationController
def random
    @resp = Faraday.get 'http://jservice.io/api/random'
    body = JSON.parse(@resp.body)
    if @resp.success?
      @random = body.map{|clue|
        {id: clue["id"],
        question: clue["question"],
        answer: clue["answer"],
        value: clue["value"],
        airdate: clue["airdate"],
        category: clue["category"]
      }}
      render json: @random
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
